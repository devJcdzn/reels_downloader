import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="top-content">
            <p className="copy"> &copy; 2023. Todo os direitos reservados por Jean Carlos.</p>
            <a href="https://github.com/devJcdzn" 
            target='_blank' 
            className="git" 
            rel="noreferrer">Meu Github</a>
          </div>
          <div className="bottom-content">
            <p className="api">Link para a Api utilizada <a 
            target='_blank'
            href="https://rapidapi.com/emmanueldavidyou/api/fb-video-reels" 
            rel="noreferrer">RapidApi</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer