import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  TableSortLabel,
  Paper,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

import { getBerriesWithData } from '../../../store/actions/BerryActions';
import { IAppState } from '../../../store/store';

import { makeStyles } from '@material-ui/core';
import './Berries.scss';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      maxHeight: 400,
    },
    textContainer: {
      backgroundColor: '#F5F5F5',
      padding: 10,
    },
    textCard: {
      margin: 10,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  };
});

type Order = 'asc' | 'desc';
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilized = array.map(
    (element, index) => [element, index] as [T, number]
  );
  stabilized.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order) return order;
    return a[1] - b[1];
  });
  return stabilized.map((element) => element[0]);
}

interface Column {
  id: keyof IBerry;
  label: string;
  format?: (value: number) => string;
}
interface Head {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IBerry
  ) => void;
  order: Order;
  orderBy: string;
}
const berryColumns: Column[] = [
  { id: 'name', label: 'Name' },
  { id: 'firmness', label: 'Firmness' },
  { id: 'flavors', label: 'Flavors' },
  { id: 'growth_time', label: 'Growth Time' },
  { id: 'max_harvest', label: 'Max Harvest' },
  { id: 'natural_gift_power', label: 'Natural Gift Power' },
  { id: 'natural_gift_type', label: 'Natural Gift Type' },
  { id: 'size', label: 'Size' },
  { id: 'smoothness', label: 'Smoothness' },
  { id: 'soil_dryness', label: 'Soil Dryness' },
];
const ColumnHead = berryColumns.map((column) => {
  return <TableCell key={column.id}>{column.label}</TableCell>;
});
const EnhancedColumnHead = (props: Head) => {
  const { classes, onRequestSort, order, orderBy } = props;
  const createSortHandler = (property: keyof IBerry) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };
  return (
    <TableRow>
      {berryColumns.map((column) => {
        return (
          <TableCell
            key={column.id}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : 'asc'}
              onClick={createSortHandler(column.id)}
            >
              {column.label}
              {orderBy === column.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const Berries: React.FunctionComponent<{}> = () => {
  const berryListWithData = useSelector(
    (state: IAppState) => state.berryListWithDataState
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getBerriesWithData());
  }, [dispatch]);

  const berryInfoText = `Berries are small, juicy, fleshy fruit. 
    As in the real world, a large variety exists in the Pokémon world, 
    with a large range of flavors, names, and effects. 
    First found in the Generation II games, many Berries have since 
    become critical held items in battle, where their various effects 
    include HP and status condition restoration, stat enhancement, 
    and even damage negation.`;

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof IBerry>('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const perPageOptions = berryListWithData.berryList.length
    ? [5, 10, 25, berryListWithData.berryList.length]
    : [5, 10, 25];
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IBerry
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const listOutFlavors = (flavorList: Array<any> | undefined) => {
    let formattedFlavors: string[] = [];
    if (flavorList && flavorList.length) {
      flavorList.forEach((flavor) => {
        formattedFlavors.push(flavor.flavor.name);
      });
    }
    return formattedFlavors.join(', ');
  };
  const TableRows =
    berryListWithData.berryList.length &&
    berryListWithData.berryList
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        return (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>{row.firmness?.name}</TableCell>
            <TableCell>{listOutFlavors(row.flavors)}</TableCell>
            <TableCell>{row.growth_time}</TableCell>
            <TableCell>{row.max_harvest}</TableCell>
            <TableCell>{row.natural_gift_power}</TableCell>
            <TableCell>{row.natural_gift_type?.name}</TableCell>
            <TableCell>{row.size}</TableCell>
            <TableCell>{row.smoothness}</TableCell>
            <TableCell>{row.soil_dryness}</TableCell>
          </TableRow>
        );
      });

  return (
    <div className="berry-container">
      <div className={classes.textContainer}>
        <Card className={classes.textCard}>
          <CardContent>
            <Typography>{berryInfoText}</Typography>
          </CardContent>
        </Card>
      </div>
      <TableContainer component={Paper} className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>{ColumnHead}</TableRow>
            {/* <EnhancedColumnHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            /> */}
          </TableHead>
          <TableBody>{TableRows}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={perPageOptions}
        component="div"
        count={
          berryListWithData.berryList ? berryListWithData.berryList.length : 0
        }
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Berries;
