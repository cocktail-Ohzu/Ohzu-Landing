import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Template from '../../components/Template';
// import styled from 'styled-components';

function Question() {
  const navigate = useNavigate();

  return (
    <>
      <Template variant="질문">
        {/* <SizedBox /> */}
        <Button
          property="border-line"
          label="나와 맞는 칵테일 추천받으러 레츠고?"
        ></Button>
      </Template>
    </>
  );
}

export default Question;
