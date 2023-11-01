import { NavLink } from 'react-router-dom';
import './Header.scss';
import SearchBar from '../SeachBar/SearchBar';

export default function Header() {
  return (
    <nav className='header'>
      <h1>News Reader</h1>
      <SearchBar />
    </nav>
  );
}
