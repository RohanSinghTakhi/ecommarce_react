import React from 'react';
import Layout from '../components/layouts/Layout';
import login from '../assets/login_img.png';

const products = [
  {
    id: 1,
    name: 'LCD Monitor',
    price: 650,
    image: login,
    quantity: 1,
    subtotal: 650
  },
  // Add more products as needed
];

function Cart() {
  return (
    <Layout>
      <section 
        className='about_box mt-28' 
        style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "98vw" }}
      >
        <div 
          style={{
            height: "10vh",
            width: "70vw",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            alignItems: "center",
            boxShadow: "1px 1px 4px grey",
            padding: "0 10px",
            boxSizing: "border-box"
          }}
        >
          <p className='text-[25px] font-medium'>Product</p>
          <p className='text-[25px] font-medium'>Price</p>
          <p className='text-[25px] font-medium'>Quantity</p>
          <p className='text-[25px] font-medium'>Subtotal</p>
        </div>
      </section>

      <section 
        className='about_box mt-10' 
        style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "98vw" }}
      >
        <div 
          style={{
            height: "50vh",
            width: "70vw",
            overflowY: "scroll",
            boxShadow: "1px 1px 4px grey",
            padding: "10px",
            boxSizing: "border-box"
          }}
        >
          {products.map(product => (
            <div 
              key={product.id}
              style={{
                height: "10vh",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                alignItems: "center",
                padding: "0 10px",
                boxSizing: "border-box",
                marginBottom: "10px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img width="54px" src={product.image} alt={product.name} />
                <h2 className='text-[20px] font-bold ml-5'>{product.name}</h2>
              </div>
              <h2 className='text-[20px] font-bold'>{`$${product.price}`}</h2>
              <input 
                type="number" 
                className="form-control number-input w-16" 
                min="0" 
                max="100" 
                step="1"
                value={product.quantity}
                style={{ textAlign: "center" }}
              />
              <h2 className='text-[20px] font-bold'>{`$${product.subtotal}`}</h2>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
