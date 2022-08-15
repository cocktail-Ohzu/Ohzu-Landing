import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../common/theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string | null;
  isSelected?: boolean | null;
}

function SelectButton({ label, isSelected = null, ...props }: ButtonProps) {
  return (
    <Wrapper isSelected={isSelected}>
      <button onClick={props.onClick}>{label}</button>
    </Wrapper>
  );
}

export default SelectButton;

const Wrapper = styled.div<{
  isSelected: boolean | null;
}>`
  width: 145px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    transition: ${({ theme }) => theme.transition.onSelect};
    background-color: ${({ theme }) => theme.palette.main.grey};
    color: ${({ theme }) => theme.palette.main.white};
    ${({ theme }) => {
      const selected = theme.palette.main.orange;
      return css`
        &:active {
          background: ${selected};
        }
      `;
    }}

    ${({ theme }) => theme.typo.button.Secondary_T_13_EB}
    font-weight: 300;

    border-radius: 8px;
    ${({ isSelected, theme }) => {
      const selected = theme.palette.main.orange;
      if (isSelected) {
        return css`
          border: 1px solid ${selected};
        `;
      } else {
        return css`
          &:hover {
            background-color: ${({ theme }) => theme.palette.main.orange};
          }
        `;
      }
    }}

    width: 100%;
    height: 47px;
  }
`;
