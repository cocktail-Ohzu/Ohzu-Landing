import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../common/theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * 기본, 테두리강조, 색칠
   */
  property?: 'default' | 'border-line' | 'fill';
  /**
   * 버튼 내용
   */
  label?: string;
  /**
   * 버튼 활성화 상태
   */
  state?: boolean;
  /**
   * 너비 고정, 가운데 정렬인 버튼 (모달->삭제하기)
   */
  fixed?: boolean;
}

function Button({
  property = 'default',
  label,
  state = true,
  fixed = false,
  ...props
}: ButtonProps) {
  return (
    <Wrapper>
      <button onClick={props.onClick}>{label}</button>
    </Wrapper>
  );
}

export default Button;

const handleColorType = (property: 'default' | 'border-line' | 'fill') => {
  const defaultColor = theme.palette.main.grey;
  const borderLineColor = theme.palette.main.orange;
  const fillColor = theme.palette.main.orange;

  switch (property) {
    case 'default':
      return defaultColor;
    case 'border-line':
      return borderLineColor;
    case 'fill':
      return fillColor;
  }
};

const Wrapper = styled.div`
  width: 263px;
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
    border: ${({ theme }) => {
      return css`
        1px solid ${theme.palette.main.orange};
      `;
    }};
    width: 100%;
    height: 47px;

    &:hover {
      background-color: ${({ theme }) => theme.palette.main.orange};
    }
  }
`;
