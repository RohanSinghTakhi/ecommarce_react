// src/components/Cart.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, removeItem } from '../Store/cart_fun.js';
import Layout from '../components/layouts/Layout';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeItem({ id }));
    } else {
      const item = cartItems.find(item => item.id === id);
      dispatch(updateCart({ id, quantity: newQuantity, price: item.price, image: item.image }));
    }
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

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = discountApplied ? (subtotal * 0.9).toFixed(2) : subtotal.toFixed(2);

  return (
    <Layout>
      <section
        className='about_box mt-28'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '98vw',
        }}
      >
        <div
          style={{
            height: '10vh',
            width: '70vw',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            alignItems: 'center',
            boxShadow: '1px 1px 4px grey',
            padding: '0 10px',
            boxSizing: 'border-box',
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
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '98vw',
        }}
      >
        <div
          style={{
            height: '50vh',
            width: '70vw',
            overflowY: 'scroll',
            boxShadow: '1px 1px 4px grey',
            padding: '10px',
            boxSizing: 'border-box',
          }}
        >
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                height: '10vh',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                alignItems: 'center',
                padding: '0 10px',
                boxSizing: 'border-box',
                marginBottom: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img width='54px' src={item.image} alt={item.title} />
                <h2 className='text-[20px] font-bold ml-5'>{item.title}</h2>
              </div>
              <h2 className='text-[20px] font-bold'>{`₹${item.price}`}</h2>
              <input
                type='number'
                className='form-control number-input w-16'
                min='0'
                max='100'
                step='1'
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value, 10) || 0)
                }
                style={{ textAlign: 'center' }}
              />
              <h2 className='text-[20px] font-bold'>{`₹${item.price * item.quantity}`}</h2>
            </div>
          ))}
        </div>
      </section>

      <section
        className='about_box mb-28 mt-5'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '98vw',
        }}
      >
        <div style={{ height: '37vh', width: '70vw', display: 'flex' }}>
          <div style={{ width: '60%', height: '100%' }}>
            <input
              style={{
                width: '250px',
                height: '45px',
                padding: '0 10px',
                border: '2px solid grey',
                alignItems: 'center',
              }}
              type='text'
              placeholder='SAVE10'
              value={discountCode}
              onChange={handleDiscountChange}
            />
            <button
              type='button'
              className='btn btn-danger w-24 h-12 ml-3 -mt-1'
              onClick={applyDiscount}
            >
              Apply
            </button>
          </div>
          <div className='p-3' style={{ width: '40%', height: '100%', border: '2px solid grey' }}>
            <h1 className='font-medium text-[25px] mt-3 ml-2'>Cart Total</h1>
            <p className='font-medium text-[20px] mt-3 ml-2 border-b-2 h-10 flex justify-between'>
              Subtotal: <span>₹{subtotal.toFixed(2)}</span>
            </p>
            <h1 className='font-medium text-[20px] mt-3 ml-2 border-b-2 h-10 flex justify-between'>
              Shipping: <span>Free</span>
            </h1>
            <h1 className='font-medium text-[20px] mt-3 ml-2 h-10 flex justify-between'>
              Total: <span>₹{total}</span>
            </h1>
            <div className='flex justify-center'>
              <button type='button' className='btn btn-danger w-24 h-10 ml-3 -mt-1'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
