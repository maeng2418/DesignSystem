import styled, { css } from 'styled-components';
import { IStyledComponentsProps } from 'styled-components-props';
import { palette, theme } from 'styled-tools';

export const TextButton = styled.button<IStyledComponentsProps>`
  color: ${palette('white')};
  ${({ darkMode }) => {
    if (darkMode) {
      return css``;
    } else {
      return css`
        background-color: ${palette('light-primary-500')};
      `;
    }
  }}
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  ${({ size }) => size === 'large' && theme(`typograph.body1`)}
  ${({ size }) => size === 'middle' && theme(`typograph.body2`)}
  ${({ size }) => size === 'small' && theme(`typograph.subtext`)}
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${palette('light-primary-300')};
    background-color: ${palette('light-primary-600')};
  }

  &:active {
    color: ${palette('light-primary-300')};
    background-color: ${palette('light-primary-700')};
  }

  &:disabled {
    color: ${palette('light-gray-500')};
    background-color: ${palette('light-gray-200')};
  }
  flex: 1;
`;
