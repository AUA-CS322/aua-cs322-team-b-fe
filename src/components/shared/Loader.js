import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const LoadingIcon = styled(LoadingOutlined)`
  font-size: ${props => props.size || 24}px;
`;
const Loader = ({ size }) => (
  <Spin indicator={<LoadingIcon size={size} spin />} />
);

export default Loader;
