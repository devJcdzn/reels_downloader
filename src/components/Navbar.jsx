import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const Navbar = () => {
  const [bar, setBar] = useState(false);

  const handleClick = () => {
    if (!bar) {
      setBar(true);
    } else {
      setBar(false);
    }
  }

  return (
    <>
      <div className="navbar">
        {!bar ?
          <button
            className='show-bar btn'
            onClick={handleClick}>
            <AiOutlineArrowDown />
          </button>
          : <div className="nav-content">
            <h4 className="nav-title">Outros tipos de download</h4>
            <ul className="nav-links">
              <li><Link to='/yt'>Youtube</Link></li>
              <li><Link to='/ttk'>Tik Tok</Link></li>
              <li><Link to='/'>Instagram</Link></li>
            </ul>
            <button
              onClick={handleClick}
              className="hide-bar btn">
              <AiOutlineArrowUp />
            </button>
          </div>}
      </div>
    </>
  )
}

export default Navbar