import styled, { css } from 'styled-components/native';
import { ICircleProps } from './types';

export const Container = styled.View<ICircleProps>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: absolute;

  ${({ color, x, y }) => css`
    background-color: ${`hsl(${color}, 100%, 50%)`};
    left: ${x}px;
    top: ${y}px;
  `}
`;
