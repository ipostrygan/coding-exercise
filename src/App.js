import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { response } from './response';
import { formatDataForCharts } from './utils';
import './App.scss';

const App = () => {
  return (
    <>
      <nav className='navbar'>
        <img src={logo} className='navbar__app-logo' alt='app-logo'/>
        <div className='navbar__navigation'>
          <div className='navbar__input-wrapper'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <input className='navbar__search-input' placeholder='Search ( "/" for hotkey)'/>
          </div>
          <ul className='navbar__menu'>
            <li className='navbar__menu-item'>
              <a href='/'>
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li className='navbar__menu-item'>
              <a href='/'>
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li className='navbar__menu-item'>
              <a href='/'>
                <FontAwesomeIcon icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <code>
          {JSON.stringify(formatDataForCharts(response))}
        </code>
      </main>
    </>
  );
}

export default App;
