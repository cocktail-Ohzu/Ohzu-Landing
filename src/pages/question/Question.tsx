import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

function Question() {
  const navigate = useNavigate();

  return (
    <>
      <h1>놀랍게도 메인화면 입니다</h1>
      <button type="button" onClick={() => navigate('/login')}>
        로그인
      </button>
    </>
  );
}

export default Question;
