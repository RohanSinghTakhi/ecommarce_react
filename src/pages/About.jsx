import React from 'react'
import Layout from '../components/layouts/Layout'
import bout from "../assets/about.png"
import info1 from "../assets/info1.png"
import info2 from "../assets/info2.png"
import info3 from "../assets/info3.png"
import info4 from "../assets/info4.png"
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"

function About() {

  const info= [{img:info1,num:"10.5k ",text:"Sallers active our site"},{img:info2,num:"33K",text:"Mopnthly Produduct Sale"},{img:info3,num:"45.5K",text:"Customer active in our site"},{img:info4,num:"25K",text:"Anual gross sale in our site"}]

  const about=[{img:about1,num:"FREE AND FAST DELIVERY",text:"Free delivery for all orders over $140"},{img:about2,num:"24/7 CUSTOMER SERVICE",text:"Friendly 24/7 customer support"},{img:about3,num:"MONEY BACK GUARANTEE",text:"We reurn money within 30 days"}]
  return (
    <Layout >
        <section class="first " style={{marginTop:"70px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{}} className='text-[50px] font-medium mt-14 mb-5'>Our Story</span>
<span style={{maxWidth:"50vw", marginRight:"30px"}} >
Launched in 2024, Exclusive is   online shopping marketplace with an active presence in Chandigarh, India. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.  </span>
<span style={{maxWidth:"50vw", marginRight:"30px"}} >Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer. </span>
        </div>
        <div class="secImg">
            <img src={bout} style={{width: "56vw",right: "-43px",top: "31px"}} />
            <video src="assets/videos/Video 53_assets_videos_video1.m4v" autoplay="" loop="" muted=""></video>
        </div>

        

    </section >

    <section className='about_box mb-28 ' style={{display:"flex",justifyContent:"center",alignItems:"center",width:"98vw" }} >
      <div style={{height:"30vh",width:"70vw" ,display:"flex",justifyContent:"space-evenly"}}>
            {info.map((item, key) => (
  <div key={key} style={{ width: "23%", height: "100%", border: "1px solid grey", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: item.num === "33K" ? "#DB4444" : "transparent", color: item.num === "33K" ? "white" : "black" }}>
    <img src={item.img} alt={item.text} style={{ width: "80px", height: "auto" }} />
    <h2 style={{ fontSize: "32px", fontWeight: "bold" }} className='mt-4'>{item.num}</h2>
    <h3 style={{ fontSize: "16px" }} className='font-medium m-2'>{item.text}</h3>
  </div>

))


            }
      </div>


    </section>
  <section className='about_box  mt-16' style={{display:"flex",justifyContent:"center",alignItems:"center",width:"98vw " }}>
  <div style={{height:"40vh",width:"70vw",margin:"50px" }}>
    <h1 className='text-[50px]  font-medium'>About Website</h1>
    <p className='font-medium font-sans text-[18px] mt-3 mr-16'>Our eCommerce website is built with React, using "@material-tailwind/react" for a sleek, responsive design and "bootstrap" for enhanced layout and styling. State management is handled with "@reduxjs/toolkit" and "redux," while navigation is powered by "react-router-dom." We use "react-icons" for seamless icon integration and "react-redux" for efficient data flow and state synchronization. This combination of technologies results in a high-performance, scalable, and visually appealing eCommerce platform that enhances user engagement and satisfaction.</p>

  </div>
  </section>

  <section className='about_box mb-28 ' style={{display:"flex",justifyContent:"center",alignItems:"center",width:"98vw" }} >
      <div style={{height:"30vh",width:"70vw" ,display:"flex",justifyContent:"space-evenly"}}>
            {about.map((item, key) => (
  <div key={key} style={{ width: "25%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <img src={item.img} alt={"error"} style={{ width: "80px", height: "auto" }} />
    <h2 style={{ fontSize: "20px", fontWeight: "bold" }} className='mt-4'>{item.num}</h2>
    <h3 style={{ fontSize: "14px" }} className='font-medium m-2'>{item.text}</h3>
  </div>

))


            }
      </div>


    </section>
    </Layout>
  )
}

export default About