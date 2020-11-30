import { Row as AntRow } from 'antd';
import styled, { css } from 'styled-components';

const Row = styled(AntRow)`
  ${props =>
    props.top &&
    css`
      margin-top: ${props.top}px;
    `}
`;

export default Row;
