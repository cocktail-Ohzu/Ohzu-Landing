import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/button/Button';
import Template from '../../components/Template';

function Home() {
  const navigate = useNavigate();

  return (
    <Template variant="홈">
      <h1>놀랍게도 메인화면 입니다</h1>
      <Button property="border-line" content="버튼입니다"></Button>
    </Template>
  );
}

export default Home;
