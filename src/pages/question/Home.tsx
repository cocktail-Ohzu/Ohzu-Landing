import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/button/Button';
import Template from '../../components/Template';
import logo from '../../images/logo.png';

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/question');
  };

  return (
    <Template variant="홈">
      <OhzuLogo>
        <img src={logo}></img>
      </OhzuLogo>
      {/* <SizedBox /> */}
      <Button
        property="border-line"
        label="나와 맞는 칵테일 추천받으러 레츠고?"
        onClick={handleButtonClick}
      ></Button>
      <SizedBox />
    </Template>
  );
}

export default Home;

const OhzuLogo = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 180px;
    height: auto;
  }
`;

const SizedBox = styled.div`
  width: 100%;
  height: 50px;
`;
