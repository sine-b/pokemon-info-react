import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Divider, Typography } from '@material-ui/core';
import {
  DataGrid,
  GridColDef,
  GridCellParams,
  ValueGetterParams,
} from '@material-ui/data-grid';
import { find } from 'lodash';

import {
  getContestTypesWithData,
  getContestEffectsWithData,
  getSuperContestEffectsWithData,
} from '../../../store/actions/ContestActions';
import { IAppState } from '../../../store/store';
import { formatStringCell } from '../../../helpers/datagridCellFormatHelper';

import { makeStyles } from '@material-ui/core/styles';
import './Contests.scss';

const useStyles = makeStyles((theme) => {
  return {
    textContainer: {
      backgroundColor: '#F5F5F5',
      padding: 10,
    },
    textCard: {
      margin: 10,
    },
  };
});

const getBerryFlavorValue = (params: ValueGetterParams): String => {
  return params.row.berry_flavor?.name ?? 'No Data';
};
const getColorValue = (params: ValueGetterParams): String => {
  if (!params.row.names || !params.row.names.length) {
    return 'No Data';
  }
  const englishName = find(params.row.names, (contestName) => {
    return contestName.language.name === 'en';
  });
  return englishName.color || 'No Data';
};
const contestTypeColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    valueFormatter: formatStringCell,
  },
  {
    field: 'berry_flavor',
    headerName: 'Associated Berry Flavor',
    flex: 1,
    valueGetter: getBerryFlavorValue,
    valueFormatter: formatStringCell,
  },
  {
    field: 'color',
    headerName: 'Associated Color',
    flex: 1,
    valueGetter: getColorValue,
    valueFormatter: formatStringCell,
    renderCell: (params: GridCellParams) => {
      return (
        <div className="contest-color-cell">
          <div
            className="square"
            style={{ backgroundColor: params.value as string }}
          />
          <strong>{params.value as string}</strong>
        </div>
      );
    },
  },
];

const getEffectValue = (params: ValueGetterParams): String => {
  if (!params.row.effect_entries || !params.row.effect_entries.length) {
    return 'No Data';
  }
  const englishEffect = find(params.row.effect_entries, (effect) => {
    return effect.language.name === 'en';
  });
  return englishEffect.effect || 'No Data';
};
const getFlavorTextValue = (params: ValueGetterParams): String => {
  if (
    !params.row.flavor_text_entries ||
    !params.row.flavor_text_entries.length
  ) {
    return 'No Data';
  }
  const englishFlavorText = find(
    params.row.flavor_text_entries,
    (flavorText) => {
      return flavorText.language.name === 'en' || 'No Data';
    }
  );
  return englishFlavorText.flavor_text;
};
const contestEffectColumns: GridColDef[] = [
  {
    field: 'effect',
    headerName: 'Effect',
    width: 500,
    flex: 1,
    valueGetter: getEffectValue,
  },
  { field: 'appeal', headerName: 'Appeal (user hearts gained)' },
  { field: 'jam', headerName: 'Jam (opponent hearts lost)' },
  {
    field: 'flavor_text',
    headerName: 'Flavor Text',
    flex: 1,
    valueGetter: getFlavorTextValue,
  },
];

const superContestEffectColumns: GridColDef[] = [
  { field: 'moves', headerName: 'Moves' },
  {
    field: 'appeal',
    headerName: 'Appeal (user hearts gained)',
  },
  {
    field: 'flavor_text',
    headerName: 'Flavor Text',
    flex: 1,
    valueGetter: getFlavorTextValue,
  },
];

const Contests: React.FunctionComponent<{}> = () => {
  const contestTypeData = useSelector(
    (state: IAppState) => state.contestTypeListWithDataState
  );
  const contestEffectData = useSelector(
    (state: IAppState) => state.contestEffectListWithDataState
  );
  const superContestEffectData = useSelector(
    (state: IAppState) => state.superContestEffectListWithDataState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContestTypesWithData());
    dispatch(getContestEffectsWithData());
    dispatch(getSuperContestEffectsWithData());
  }, [dispatch]);

  const classes = useStyles();

  const contestRowsPerPage: number[] = [
    5,
    20,
    contestEffectData.contestEffectList?.length || 100,
  ];
  const superContestRowsPerPage: number[] = [
    5,
    10,
    superContestEffectData.superContestEffectList?.length || 100,
  ];
  const contestInfoText = `Pokémon Contests are a type of 
    competition often contrasted with Pokémon battles and 
    held in Contest Halls. Pokémon are judged on their condition 
    and moves in two rounds, to determine which one is the 
    best of its category.`;
  const contestTypeInfoText = `A Pokémon's condition is made up 
    of stats that exist for use in Pokémon Contests, Super Contests, 
    and Contest Spectaculars. There are five different condition 
    stats: Coolness, Beauty, Cuteness, Cleverness, and Toughness.`;
  const contestEffectInfoText = `Every move that a Pokémon can 
    learn is associated with one of the five conditions, and the 
    audience reaction to a move's condition influences the excitement 
    in the hall`;
  const superContestEffectInfoText = ``;
  const TextComponent = (text: string) => {
    return (
      <div className={classes.textContainer}>
        <Card className={classes.textCard}>
          <CardContent>
            <Typography>{text}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="contest-container">
      {TextComponent(contestInfoText)}
      <Divider />
      {TextComponent(contestTypeInfoText)}
      <div className="datagrid-container">
        <DataGrid
          autoHeight
          disableColumnMenu
          density="compact"
          rows={contestTypeData.contestTypeList}
          columns={contestTypeColumns}
          pageSize={5}
        />
      </div>
      {TextComponent(contestEffectInfoText)}
      <div className="datagrid-container">
        <DataGrid
          autoHeight
          disableColumnMenu
          rows={contestEffectData.contestEffectList}
          columns={contestEffectColumns}
          rowsPerPageOptions={contestRowsPerPage}
          pageSize={5}
        />
      </div>
      {TextComponent(superContestEffectInfoText)}
      <div className="datagrid-container">
        <DataGrid
          autoHeight
          disableColumnMenu
          rows={superContestEffectData.superContestEffectList}
          columns={superContestEffectColumns}
          rowsPerPageOptions={superContestRowsPerPage}
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default Contests;
