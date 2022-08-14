import { Route, Routes } from 'react-router-dom';
import Home from './pages/question/Home';
import Result from './pages/question/Result';
import Question from './pages/question/Question';
import NotFound from './pages/common/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Question />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
