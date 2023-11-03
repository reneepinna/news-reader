import {  useNavigate } from 'react-router-dom';
import './Header.scss';
import SearchBar from '../SeachBar/SearchBar';

export default function Header() {
  const navigate = useNavigate()
  return (
    <nav className='header'>
      <h1 className='logo' onClick={() => navigate('')}>News Reader</h1>
      <SearchBar />
    </nav>
  );
}
