import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/Layout';
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sale from '../components/home_page/Sale';

function Home_pages() {
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const tick = () => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        return;
      }
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(prevHours => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    };

    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, [hours, minutes, seconds]);

  const formatTime = (value) => {
    return String(value).padStart(2, '0');
  };

  return (
    <Layout>
      <div className="container mt-28">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner2} className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner3} className="d-block w-100 carousel-image" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section className='about_box mb-28 mt-24' style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "98vw" }} >
        <div style={{ height: "90vh", width: "83vw" }}>
          <div style={{ display: "flex" }}>
            <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="40" rx="4" fill="#DB4444" />
            </svg>
            <h2 className='font-medium text-[30px] text-red-700 ml-3'>Today’s</h2>
          </div>
          <div style={{ display: "flex" }}>
            <h2 className='font-medium text-[46px] mt-3'>Flash Sales</h2>
            <div style={{ display: "flex" }} className='ml-12 mt-2'>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='mr-4'>
                <h6 className='text-[15px] font-medium'>Hours</h6>
                <h6 className='text-[36px] font-bold'>{formatTime(hours)}</h6>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='mr-4'>
                <h6 className='text-[15px] font-medium'>Minutes</h6>
                <h6 className='text-[36px] font-bold'>{formatTime(minutes)}</h6>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='mr-4'>
                <h6 className='text-[15px] font-medium'>Seconds</h6>
                <h6 className='text-[36px] font-bold'>{formatTime(seconds)}</h6>
              </div>
            </div>
          </div>
          <Sale />
        </div>
      </section>
    </Layout>
  );
}

export default Home_pages;
