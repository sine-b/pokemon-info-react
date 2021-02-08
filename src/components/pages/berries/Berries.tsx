import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Typography } from 'antd';

import { getBerries } from '../../../store/actions/BerryActions';
import { IAppState } from '../../../store/store';

import './Berries.css';

const { Title, Paragraph, Text } = Typography;

const Berries: React.FunctionComponent<{}> = () => {
  const berryData = useSelector((state: IAppState) => state.berryListState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBerries('70'));
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    },
  ];

  return (
    <div className="layout-content-page-container berry-container">
      <Title>Berries</Title>
      <div className="table-container">
        <Table
          className="berry-table"
          columns={columns}
          dataSource={berryData.berryList.results}
          scroll={{ y: 'calc(100vh - 15em)' }}
        />
      </div>
    </div>
  );
};

export default Berries;
