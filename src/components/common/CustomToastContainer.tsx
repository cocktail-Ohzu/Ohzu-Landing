import {
  ToastsContainer,
  ToastsContainerPosition,
  ToastsStore,
} from 'react-toasts';
import styled from 'styled-components';

const CustomToastContainer = () => {
  return (
    <StyledDiv>
      <style>{`
        .toast {
          color: #fff !important;
          display: inline-block !important;
          background-color: #242424 !important;
          box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.16) !important;
          opacity: 0.7 !important;
          border-radius: 5px !important;
          width: 343px !important;
          line-height: 53px !important;
          font-family: 'Pretendard' !important;
          font-size: 16px !important;
          user-select: none; !important;
        }
      `}</style>
      <ToastsContainer
        position={ToastsContainerPosition.BOTTOM_CENTER}
        store={ToastsStore}
        className={`background-color: red;`}
      ></ToastsContainer>
    </StyledDiv>
  );
};

export default CustomToastContainer;

const StyledDiv = styled.div`
  & div { background-color: red; !important; }
`;
