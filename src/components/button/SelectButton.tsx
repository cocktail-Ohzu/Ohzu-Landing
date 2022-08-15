import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../common/theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string | null;
  isSelected?: boolean | null;
}

function SelectButton({ label, isSelected, ...props }: ButtonProps) {
  return (
    <Wrapper>
      <button onClick={props.onClick}>{label}</button>
    </Wrapper>
  );
}

export default SelectButton;

const Wrapper = styled.div`
  width: 145px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    transition: ${({ theme }) => theme.transition.onHover};
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
    width: 100%;
    height: 47px;

    &:hover {
      background-color: ${({ theme }) => theme.palette.main.orange};
    }
  }
`;
