import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';
import "../Components/css/project.css";
import { FaGithub } from "react-icons/fa";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/database/data.json');
        setProjects(response.data); 
      } catch (error) {
        console.error('Error fetching the data:', error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className='project-container'>
      <Fade direction="down" cascade>
        <h1>My Projects</h1>
      </Fade>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {projects.map((item) => (
          <SwiperSlide key={item.id} className='swiper'>
            <div className="project-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="text-item">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Fade direction="right" cascade>
                <div className="language">
                  {item.languages.map((language, index) => (
                    <div key={index} className="lang-item">{language}</div>
                  ))}
                </div>
                <div className="project-links">
                  <a href={item.link} target="_blank" rel="noreferrer"><i className="fa-solid fa-link"></i></a>
                  <a href={item.github} target="_blank" rel="noreferrer"><FaGithub/></a>
                </div>
              </Fade>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
