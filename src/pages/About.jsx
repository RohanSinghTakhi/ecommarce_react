import React from 'react'
import Layout from '../components/layouts/Layout'
import bout from "../assets/about.png"

function About() {
  return (
    <Layout >
        <section class="first " style={{marginTop:"70px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{}} className='text-[50px] font-medium mt-14 mb-5'>Our Story</span>
<span style={{maxWidth:"50vw", marginRight:"30px"}} >Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </span>
<span style={{maxWidth:"50vw", marginRight:"30px"}} >Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer. </span>
        </div>
        <div class="secImg">
            <img src={bout} style={{width: "56vw",right: "-43px",top: "31px"}} />
            <video src="assets/videos/Video 53_assets_videos_video1.m4v" autoplay="" loop="" muted=""></video>
        </div>

        

    </section>
    </Layout>
  )
}

export default About