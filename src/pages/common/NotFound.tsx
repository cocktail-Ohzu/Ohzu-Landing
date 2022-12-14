import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/button/Button';
import Template from '../../components/common/Template';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Template variant="홈">
      <Wrapper>
        <Notice>
          <p>
            404
            <br />
          </p>
          <p>
            NOT
            <br />
          </p>
          <p>FOUND</p>
        </Notice>
        <Button
          property="border-line"
          label="이전 페이지로 가기"
          onClick={() => navigate(-1)}
        ></Button>
      </Wrapper>
    </Template>
  );
}

export default NotFound;

const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 70);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Notice = styled.div`
  margin-bottom: 60px;
  & p {
    ${({ theme }) => theme.typo.fixed.HomeTitle_T_24_EB}
    font-weight: 500;
    color: ${({ theme }) => theme.palette.main.white};
  }
`;
