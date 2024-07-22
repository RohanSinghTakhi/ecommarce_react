import React from 'react'
import Layout from '../components/layouts/Layout'
import ima from "../assets/phone_about.png"

function Contact() {
  return (
    <Layout>

<body style={{
            height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"
        }}>
            
        <div style={{backgroundColor:"blue",height:"80vh",width:"80%", display:"flex",justifyContent:"space-between" }}>
           <div className="about_box_1" style={{width:"40%",height:"100%" ,backgroundColor:"#f5f2f2" ,display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center"}}>
            <div className="1"style={{width:"90%",height:"50%"  ,borderBottom:"1px solid grey"}}>
                <div className='flex items-center '> 
                    <img style={{height:"40px",marginRight:"5px",}} src={ima} alt="" srcset="" />
                    <h1 className='text-[20px] font-medium'>Call To us </h1>
                </div>
            </div>
            <div className="1"style={{width:"90%",height:"50%" }}>

            </div>
           </div>
           <div className="about_box_2 " style={{width:"55%" ,height:"100%",backgroundColor:"green"}}></div>
        </div>
        </body>
    </Layout>
  )
}

export default Contact