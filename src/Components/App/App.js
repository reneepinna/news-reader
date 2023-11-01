//b8fc9fa1e6694440bd9372d8f6ada677

import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Header from '../Header/Header';
import Article from '../Article/Article';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/article' element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
