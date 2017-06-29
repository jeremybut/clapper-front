import styled, { css } from 'styled-components';
import { color, ui } from './colors';

export const base = 16;
export const spacing = (input = 1) => `${input * base}px`;
export const lineHeight = 1.8;

export const List = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${spacing(2)};
  padding-right: ${spacing(2)};

  ${props =>
    props.narrow &&
    css`
    max-width: 960px;
  `} ${props =>
      props.tight &&
      css`
    max-width: 800px;
  `};
`;

export { color, ui };
