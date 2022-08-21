import {
  ToastsContainer,
  ToastsContainerPosition,
  ToastsStore,
} from 'react-toasts';

const CustomToastContainer = () => {
  return (
    <ToastsContainer
      position={ToastsContainerPosition.BOTTOM_CENTER}
      store={ToastsStore}
      lightBackground={true}
    ></ToastsContainer>
  );
};

export default CustomToastContainer;
