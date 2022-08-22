import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/question/Home';
import Result from './pages/question/Result';
import Question from './pages/question/Question';
import NotFound from './pages/common/NotFound';
import { AnimatePresence } from 'framer-motion';
import CustomToastContainer from './components/common/CustomToastContainer';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <CustomToastContainer />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
