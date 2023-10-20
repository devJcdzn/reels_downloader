import { BsArrowBarDown } from 'react-icons/bs';
import Header from './Header';
import Navbar from './Navbar';
import axios from 'axios';
import { useState } from 'react';

const Tiktok = () => {
  const [url, setUrl] = useState('');
  const [picture, setPicture] = useState();
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const options = Request(url);
  

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const setValues = (response) => {
    setPicture(response.data.picture);
    setName(response.data.a);
    setLink(response.data.links[0].link);
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      const result = response;

      setValues(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <Navbar />
      <section className="home-container">
        <div className="home-content">
          <div className="input">
            <div className="title-content">
              <h2 className="title">Seu melhor downloader</h2>
              <h4>Cole sua URL abaixo e faça o download instantaneamente.</h4>
            </div>
            <input
              type="text"
              onBlur={handleChange}
              className="url-input"
              placeholder="Cole sua URL aqui" />
            <button
              className="button-submit"
              onClick={handleSubmit}
            ><BsArrowBarDown /></button>
          </div>

          <div className="result">

            {url === '' ?
              <h4 className='video-name'>Cole a sua URL</h4>
              : loading ? <h4 className='video-name'>Carregando...</h4>
                :
                (<div className="result-content">
                  <h4 className="video-name">{name}</h4>
                  <div className="thum-content">
                    <img
                      src={picture}
                      alt="instagram Downloader"
                      className="thumbnail" />
                  </div>
                  <a
                    href={link}
                    target='_blank'
                    className="download-button"
                    rel="noreferrer">Baixar</a>
                </div>)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Tiktok;