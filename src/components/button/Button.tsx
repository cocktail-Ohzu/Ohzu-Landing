import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../../common/theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * 기본, 테두리강조, 색칠
   */
  property?: 'default' | 'border-line' | 'fill';
  /**
   * 버튼 내용
   */
  content?: string;
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
  content,
  state = true,
  fixed = false,
  ...props
}: ButtonProps) {
  return (
    <Wrapper
      property={property}
      state={state}
      disabled={!state}
      fixed={fixed}
      {...props}
    >
      <p>{content}</p>
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

const Wrapper = styled.button<{
  property: 'default' | 'border-line' | 'fill';
  fixed: boolean;
  state: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ property }) => handleColorType(property)};
`;
