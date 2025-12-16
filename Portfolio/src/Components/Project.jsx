import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  function truncateDescription(description, length = 190) {
    return description.length > length ? `${description.slice(0, length)}...` : description;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20 px-6 relative overflow-hidden' id='project'>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl bottom-20 right-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Fade direction="down" cascade>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
        </Fade>

        {/* Swiper Slider */}
        <Swiper
          effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={projects.length > 3}   // 👈 only enable if more than 3 blogs
      slidesPerGroup={1}  
     speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
         pauseOnMouseEnter: true,
      }}
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
       breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 30 },
        640: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      }}
      modules={[EffectCoverflow, Autoplay]}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id} className="w-full">
              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Floating Links on Image Hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      aria-label={item.title}
                      rel="noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                    <a 
                      href={item.github} 
                      target="_blank" 
                      rel="noreferrer"
                       aria-label={item.title}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {truncateDescription(item.description)}
                  </p>

                  {/* Technologies */}
                  <Fade direction="up" cascade damping={0.1}>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.languages.map((language, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium hover:border-blue-400/50 transition-colors duration-300"
                        >
                          {language}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer"
                        aria-label='live-demo'
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group/btn"
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                      <a 
                        href={item.github} 
                        target="_blank" 
                        rel="noreferrer"
                        aria-label='github-link'
                        className="px-4 py-2.5 bg-slate-700/50 border border-slate-600 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 flex items-center justify-center group/btn"
                      >
                        <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform duration-300" />
                      </a>
                    </div>
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: rgba(96, 165, 250, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, rgb(96, 165, 250), rgb(168, 85, 247));
        }
      `}</style>
    </div>
  );
}