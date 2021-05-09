import styled, { css } from 'styled-components';
import { IStyledComponentsProps } from 'styled-components-props';
import { palette, theme } from 'styled-tools';

export const Title = styled.div<IStyledComponentsProps>`
  ${({ size }) => size === 'large' && theme(`typograph.h1`)}
  ${({ size }) => size === 'middle' && theme(`typograph.h2`)}
  ${({ size }) => size === 'small' && theme(`typograph.h3`)}
`;
