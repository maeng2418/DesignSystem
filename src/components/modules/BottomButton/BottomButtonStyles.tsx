import styled from 'styled-components';
import { IStyledComponentsProps } from 'styled-components-props';
import { prop, palette, theme } from 'styled-tools';

export const BottomButton = styled.div<IStyledComponentsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  gap: 24px;
`;
