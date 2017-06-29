import styled, { css } from 'styled-components';
import { spacing } from './variables';
import { color, ui } from './colors';

export const Button = styled.button`
  padding: ${spacing(.5)} ${spacing()};
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: ${ui('secondary')};
  outline: none;

  ${props => props.big && css`
    padding: ${spacing(.75)} ${spacing(2)};
    font-size: 1.25rem;
  `};

  ${props => props.outline && css`
    background-color: transparent;
    box-shadow: 0 0 0 1px solid ${ui('secondary')};
    color: ${ui('secondary')};
  `};
`;



