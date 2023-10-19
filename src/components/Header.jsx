import './Header.scss';

const Header = () => {
  return (
    <>
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <a href="#" className="logo">Insta<span>Loader</span></a>
                </div>
                <div className="header-donate">
                <a href="#" className="donate-link">Doação</a>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header