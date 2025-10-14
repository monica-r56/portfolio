import Portfolio from './Portfolio';
import { Routes, Route } from 'react-router-dom'; 

const Index = () => {
  return (
    <Routes>
      <Route path="*" element={<Portfolio />} />
    </Routes>
  );
};

export default Index;