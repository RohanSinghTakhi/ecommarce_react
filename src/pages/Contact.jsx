import React from 'react';
import Layout from '../components/layouts/Layout';
import ima from "../assets/phone_about.png";
import mail from "../assets/mail_about.png";

function Contact() {
  const box = [{ text: " Your Name" }, { text: " Your Email" }, { text: " Your Phone" }];

  const handleSubmit = () => {
    alert("Email has been sent to admin using EmailJS API");
  };

  return (
    <Layout>
      <section className='about_box mb-28' style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "98vw" }} >
        <div style={{ height: "70vh", width: "90vw", display: "flex", justifyContent: "space-evenly", marginTop: "80px" }}>
          <div style={{ width: "30%", boxShadow: "1px 1px 5px grey", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "80%", height: "35%", borderBottom: "2px solid #D9D9D9" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img width="50px" src={ima} alt="" />
                <h1 className='text-[25px] ml-4 font-medium'>Call To Us </h1>
              </div>
              <p className='text-[17px] mt-4 font-medium'>We are available 24/7, 7 days a week.</p>
              <p className='text-[17px] mt-4 font-medium'>Phone: +91 9999988888</p>
            </div>
            <div style={{ width: "80%", height: "45%" }}>
              <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                <img width="50px" src={mail} alt="" />
                <h1 className='text-[25px] ml-4 font-medium'>Call To Us </h1>
              </div>
              <p className='text-[17px] mt-5 font-medium'>Fill out our form and we will contact you within 24 hours.</p>
              <p className='text-[17px] mt-3 font-medium'>Emails: customer@exclusive.com</p>
              <p className='text-[17px] mt-3 font-medium'>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div style={{ position: 'relative', width: "65%", backgroundColor: "white", boxShadow: "1px 2px 5px grey", display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "90%", height: "50px", marginTop: "50px", display: "flex", justifyContent: "space-between" }}>
              {box.map((item, index) => (
                <input
                  key={index}
                  style={{
                    backgroundColor: "#F5F5F5",
                    width: "32%",
                    height: "auto",
                    border: "none",
                    outline: "none",
                    padding: "8px",
                    color: "grey",
                    fontSize: "17px"
                  }}
                  type="text"
                  placeholder={item.text}
                />
              ))}
            </div>
            <textarea
              style={{
                width: "90%",
                height: "50%",
                marginTop: "30px",
                backgroundColor: "#F5F5F5",
                border: "none",
                outline: "none",
                padding: "10px"
              }}
              placeholder="Your Message"
            />
            <button
              type="button"
              style={{ position: 'absolute', right: '40px', bottom: "34px" }}
              className="btn btn-danger text-[16px] w-52 h-14 mt-8"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
