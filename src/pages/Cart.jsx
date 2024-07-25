import React, { useState } from 'react';
import Layout from '../components/layouts/Layout';
import login from '../assets/login_img.png';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import pro1 from "../../assets/product1.png"
import pro2 from "../../assets/product2.png"
import pro3 from "../../assets/Product3.png"
import pro4 from "../../assets/Product4.png"

const initialProducts = [
  {
    id: 1,
    name: 'LCD Monitor',
    price: 650,
    image: login,
    subtotal: 0 
  },
  
];

function Cart() {
  const [products, setProducts] = useState(
    initialProducts.map(product => ({
      ...product,
      quantity: 1, 
      subtotal: product.price * 1 
    }))
  );
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, quantity: newQuantity, subtotal: product.price * newQuantity }
        : product
    ));
  };

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const applyDiscount = () => {
    if (discountCode === 'SAVE10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid discount code');
      setDiscountApplied(false);
    }
  };

  const subtotal = products.reduce((acc, product) => acc + product.subtotal, 0);
  const total = discountApplied ? subtotal * 0.9 : subtotal; // Example: 10% discount

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
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10) || 0)}
                style={{ textAlign: "center" }}
              />
              <h2 className='text-[20px] font-bold'>{`$${product.subtotal}`}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className='about_box mb-28 mt-5' style={{display:"flex",justifyContent:"center",alignItems:"center",width:"98vw" }} >
        <div style={{height:"37vh",width:"70vw" ,display:"flex"}}>
          <div style={{width:"60%",height:"100%"}}>
            <input 
              style={{width:"250px",height:"45px",padding:"0 10px",border:"2px solid grey",alignItems:"center"}} 
              type="text" 
              placeholder='SAVE10' 
              value={discountCode}
              onChange={handleDiscountChange}
            />
            <button type="button" className="btn btn-danger w-24 h-12 ml-3 -mt-1" onClick={applyDiscount}>Apply</button>
          </div>
          <div className='p-3' style={{width:"40%",height:"100%",border:"2px solid grey"}}>
            <h1 className='font-medium text-[25px] mt-3 ml-2'>Cart Total</h1>
            <p className='font-medium text-[20px] mt-3 ml-2 border-b-2 h-10 flex justify-between'>
              Subtotal: <span>${subtotal}</span>
            </p>
            <h1 className='font-medium text-[20px] mt-3 ml-2 border-b-2 h-10 flex justify-between'>
              Shipping: <span>Free</span>
            </h1>
            <h1 className='font-medium text-[20px] mt-3 ml-2 h-10 flex justify-between'>
              Total: <span>${total}</span>
            </h1>
            <div className='flex justify-center'>
              <button type="button" className="btn btn-danger w-24 h-10 ml-3 -mt-1">Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
