import React from 'react';
import { Row, Col, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const detailList = [
  'Name',
  'Position',
  'Department',
  'Manager',
  'Location',
  'Email',
  'Phone',
];

const UserDetails = ({ photoUrl, ...props }) => {
  return (
    <Row justify="center" gutter={[0, 10]}>
      <Col>
        <Avatar
          shape="square"
          size={100}
          icon={<UserOutlined />}
          src={photoUrl}
        />
      </Col>
      {detailList.map(detail => (
        <Col span={24} key={detail}>
          <Row justify="center">
            <Text strong>{detail}:&nbsp;</Text>
            <Text>{props[detail.toLowerCase()] || 'N/A'}</Text>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default UserDetails;
