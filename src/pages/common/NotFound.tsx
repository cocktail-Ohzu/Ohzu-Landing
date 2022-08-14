import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <h1>404 Not Found</h1>
      <button type="button" onClick={() => navigate('/')}>
        메인페이지로
      </button>
    </>
  );
}

export default NotFound;
