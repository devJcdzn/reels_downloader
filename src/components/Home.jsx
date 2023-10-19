import './Home.scss';
import { useState } from 'react';

import axios from 'axios';
import { BsArrowBarDown } from 'react-icons/bs';


const Home = () => {
  const [url, setUrl] = useState('');
  const [picture, setPicture] = useState();
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);


  const options = {
    method: 'GET',
    url: 'https://fb-video-reels.p.rapidapi.com/api/getSocialVideo',
    params: {
      url: url
    },
    headers: {
      'X-RapidAPI-Key': '816b06a8e9msh1f56e8347828dc4p1dd781jsn97b2185c420b',
      'X-RapidAPI-Host': 'fb-video-reels.p.rapidapi.com'
    }
  };

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

export default Home