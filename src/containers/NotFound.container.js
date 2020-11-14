import React from 'react';
import { Result, Typography } from 'antd';

const { Title, Text } = Typography;
const NotFound = () => {
  return (
    <Result
      status="404"
      title={<Title level={2}>404</Title>}
      subTitle={
        <Text level={3}>Sorry, the page you visited does not exist.</Text>
      }
    />
  );
};

export default NotFound;
