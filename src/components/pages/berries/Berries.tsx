import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import {
  DataGrid,
  GridToolbar,
  GridColDef,
  ValueGetterParams,
} from '@material-ui/data-grid';

import { getBerriesWithData } from '../../../store/actions/BerryActions';
import { IAppState } from '../../../store/store';
import { formatStringCell } from '../../../helpers/datagridCellFormatHelper';

import { makeStyles } from '@material-ui/core/styles';
import './Berries.scss';

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

const getFirmnessValue = (params: ValueGetterParams): String => {
  return params.row.firmness?.name ?? 'No Data';
};
const getFlavorsValue = (params: ValueGetterParams): String => {
  let flavorArray: String[] = [];
  if (!params.row.flavors || !params.row.flavors.length) {
    return 'No Data';
  }
  flavorArray = params.row.flavors.map(
    (flavorObj: { flavor: { name: String; url: String }; potency: Number }) => {
      if (flavorObj.flavor?.name) {
        return `${flavorObj.flavor.name}: ${flavorObj.potency}`;
      }
      return '';
    }
  );
  return flavorArray.join(', ');
};
const getGiftTypeValue = (params: ValueGetterParams): String => {
  return params.row.natural_gift_type?.name ?? 'No Data';
};
const berryColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    // flex: 0.6,
    valueFormatter: formatStringCell,
  },
  {
    field: 'firmness',
    headerName: 'Firmness',
    // flex: 1,
    valueGetter: getFirmnessValue,
    valueFormatter: formatStringCell,
  },
  {
    field: 'flavors',
    headerName: 'Flavors (by potency)',
    width: 325,
    valueGetter: getFlavorsValue,
  },
  {
    field: 'growth_time',
    headerName: 'Growth Time (hours)',
    width: 145,
    // flex: 0.5,
  },
  {
    field: 'max_harvest',
    headerName: 'Max Harvest (per tree)',
    width: 160,
    // flex: 0.5
  },
  {
    field: 'natural_gift_power',
    headerName: 'Natural Gift Power',
    width: 150,
    // flex: 0.5
  },
  {
    field: 'natural_gift_type',
    headerName: 'Natural Gift Type',
    width: 150,
    // flex: 1,
    valueGetter: getGiftTypeValue,
    valueFormatter: formatStringCell,
  },
  {
    field: 'size',
    headerName: 'Size (mm)',
    // flex: 0.5
  },
  {
    field: 'smoothness',
    headerName: 'Smoothness',
    // flex: 0.5
  },
  {
    field: 'soil_dryness',
    headerName: 'Soil Dryness',
    // flex: 0.5
  },
];

const Berries: React.FunctionComponent<{}> = () => {
  const berryData = useSelector(
    (state: IAppState) => state.berryListWithDataState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBerriesWithData());
  }, [dispatch]);

  const classes = useStyles();
  const rowsPerPage: number[] = [10, 25, berryData.berryList?.length || 100];
  const berryInfoText = `Berries are small, juicy, fleshy fruit. 
    As in the real world, a large variety exists in the Pokémon world, 
    with a large range of flavors, names, and effects. 
    First found in the Generation II games, many Berries have since 
    become critical held items in battle, where their various effects 
    include HP and status condition restoration, stat enhancement, 
    and even damage negation.`;

  return (
    <div className="berry-container">
      <div className={classes.textContainer}>
        <Card className={classes.textCard}>
          <CardContent>
            <Typography>{berryInfoText}</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="berry-datagrid-container">
        <DataGrid
          disableColumnMenu
          components={{ Toolbar: GridToolbar }}
          rows={berryData.berryList}
          columns={berryColumns}
          rowsPerPageOptions={rowsPerPage}
          pageSize={rowsPerPage[0]}
        />
      </div>
    </div>
  );
};

export default Berries;
