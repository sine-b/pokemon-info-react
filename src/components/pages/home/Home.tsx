import React, { useRef, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { Card, Image, Space, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import logoPng from '../../../assets/logo.png';
import './Home.css';

const { Title, Paragraph, Text } = Typography;

const Home: React.FunctionComponent<{}> = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const { width } = useResizeDetector({ targetRef: homeRef });

  const aboutText =
    'This is a basic React app meant to demonstrate the use of ' +
    'typed data management using TypeScript and Redux. ' +
    'Custom routes are organized in a dedicated config file for ' +
    'ease of maintenance. All data is pulled using the PokeAPI ' +
    'and the UI laid out using Ant Design.';

  const howToUseText = 'Navigate using the menu items on the left side.';

  return (
    <div ref={homeRef}>
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <div ref={homeRef} className="logo-container">
          <Image
            width={width && (width > 530 ? 500 : 250)}
            src={logoPng}
            preview={false}
          />
          <Title level={2}>Information App</Title>
        </div>
        <div className="layout-content-page-container">
          <Card title="About">
            <Paragraph>{aboutText}</Paragraph>
          </Card>
        </div>
        <div className="layout-content-page-container">
          <Card title="How to Use">
            <Paragraph>{howToUseText}</Paragraph>
            <div className="bounce">
              <ArrowLeftOutlined />
              <Text type="success" strong>
                {' '}
                Explore!
              </Text>
            </div>
          </Card>
        </div>
      </Space>
    </div>
  );
};

export default Home;
