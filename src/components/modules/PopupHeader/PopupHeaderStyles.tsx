import styled from 'styled-components';
import { IStyledComponentsProps } from 'styled-components-props';
import { prop, palette, theme } from 'styled-tools';

export const PopupHeader = styled.header<IStyledComponentsProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
