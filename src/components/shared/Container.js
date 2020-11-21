import React from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'antd';

const StyledContainer = styled(Row)`
  ${props =>
    props.top &&
    css`
      margin-top: ${props.top}px;
    `}
`;

const Container = ({ children, ...props }) => (
  <StyledContainer justify="center" {...props}>
    <Col span={20}>{children}</Col>
  </StyledContainer>
);

export default Container;
