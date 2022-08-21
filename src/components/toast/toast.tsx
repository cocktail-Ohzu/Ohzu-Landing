import {
  forwardRef,
  HTMLAttributes,
  useImperativeHandle,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../common/theme';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  state?: boolean;
  background?: string;
}

// function Toast({ label, state, background, ...props }: ToastProps) {

//   return (
//     <Wrapper>
//       <p>{label}</p>
//     </Wrapper>
//   );
// }
const Toast = forwardRef((props: ToastProps, ref) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    },
  }));

  return (
    <Wrapper>
      <p>{props.label}</p>
    </Wrapper>
  );
});

export default Toast;

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 50px;
  border-radius: 8px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.main.grey};
  opacity: 0.7;
  color: ${({ theme }) => theme.palette.main.white};

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
