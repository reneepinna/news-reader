import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Header from '../Header/Header';
import Article from '../Article/Article';
import SearchPage from '../SearchPage/SearchPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/article' element={<Article />} />
        <Route path='/search' element={<SearchPage />} >
          <Route path=":query" element={<SearchPage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
