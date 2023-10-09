import React from 'react';
import { useApp } from '../../hook/useApp';
import { useNavigate } from 'react-router-dom';
import { BiSolidTrashAlt } from 'react-icons/bi';
import './style.css';
import { FaTimes } from 'react-icons/fa';
const Cart = () => {
  const { cart, setCart, cartItemCount, show, setShow } = useApp();

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal;
  const navigate = useNavigate();

  return (
    <div className="container">
      <div
        className={`small-screen   text-center shadow ${show ? 'active' : ''}`}
      >
        <div className="position-relative">
          {cartItemCount === 0 ? (
            <h3 className=" Items  fw-semibold   fs-4  text-center   text-uppercase   ">
              No Items
            </h3>
          ) : (
            <h3 className=" Items  fw-semibold   fs-4  text-center  text-uppercase   ">
              Total items ( {cartItemCount} )
            </h3>
          )}
          <span className="position-absolute d-lg-none top-0 end-0 me-2 mt-3 text-white fs-5">
            <FaTimes onClick={() => setShow(false)} />
          </span>
        </div>
        <div className="mt-4 cart ">
          {cart.map((item) => {
            return (
              <div className="single-item border-top  py-2    " key={item.id}>
                <div className=" row align-items-center ">
                  <div className="col-3">
                    <img
                      src={item.img}
                      style={{ width: '50px', height: '50px' }}
                      alt=""
                    />
                  </div>

                  <div className="col-4 text-start info ">
                    <h6 className="mb-0"> {item.title}</h6>

                    <span className="text-muted"> Tk {item.price}</span>
                  </div>
                  <div className="col-3">
                    <select
                      className="rounded-0  bg-transparent select"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    >
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={i + 1} className="option    ">
                          <span> {i + 1}</span>
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-2">
                    <button
                      className="btn bg-transparent"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <BiSolidTrashAlt className="trash fs-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="Amount shadow-sm p-2    ">
            <div className="d-flex justify-content-between align-items-center">
              <span>Subtotal</span> <span>Tk : {subtotal}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Total</span> <span>Tk : {total}</span>
            </div>
          </div>
          <div className="btn-all    ">
            <button
              onClick={() => {
                navigate('/checkout');
              }}
              className="btn btn-process fw-semibold w-100 py-2 fs-5 text-uppercase "
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
