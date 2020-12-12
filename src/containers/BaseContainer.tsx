import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import Router from '../router/Router';
import { routes } from '../router/config';

import MenuPanel from '../components/menu-panel/MenuPanel';

import './BaseContainer.css';

const { Content, Sider } = Layout;

export default function BaseContainer() {
  return (
    <BrowserRouter>
      <Layout className="layout-container">
        <Sider width={200}>
          <MenuPanel />
        </Sider>
        <Layout className="layout-content-page-container">
          <Breadcrumb className="breadcrumb-container">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="content-container">
            <Router routes={routes}></Router>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
