import styled from 'styled-components';
import { IStyledComponentsProps } from 'styled-components-props';
import { prop, palette, theme } from 'styled-tools';

export const Popup = styled.div<IStyledComponentsProps>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

export const PopupContainer = styled.div<IStyledComponentsProps>`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 24px;
  flex-direction: column;
  border-radius: 8px;
  background: ${palette('white')};
  width: 50%;
  height: 50%;
  z-index: 1;
`;

export const PopupContent = styled.div<IStyledComponentsProps>`
  padding: 24px 0;
`;

export const PopupBackground = styled.div<IStyledComponentsProps>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${palette('light-gray-400')};
  z-index: -1;
`;
