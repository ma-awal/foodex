import React from 'react';
import Cart from '../../components/Cart/Cart';
import Card from '../../components/PropCard/Card';
import CategoryFood from '../../components/CategoryFood/CategoryFood';
import { useApp } from '../../hook/useApp.js';
import './style.css';

const Home = () => {
  const { food } = useApp();
  if (!Array.isArray(food)) {
    return <p>Food data is not available or not in the expected format.</p>;
  }
  const uniqueCategories = [...new Set(food.map((item) => item.category))];
  return (
    <section className="Home" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="container-fluid">
        <div className="row justify-content-between ">
          <div className="  d-none d-xl-block col-1"></div>
          <div className="col-12 col-lg-8    ">
            <div className="text-center">
              <Card name={'Good food, Good moment'} />
            </div>
            <div className="search-bar">
              <nav className=" navbar align-items-center gap-3 justify-content-start   bg-light shadow text-white">
                <div className="input-search   d-flex align-items-center gap-1">
                  <button className="btn-process   fw-semibold  ">
                    Search
                  </button>
                  <input
                    type="search"
                    className="    rounded-0   "
                    placeholder="Whats in your mind"
                  />
                </div>
                <div className="nav-item px-2">
                  <a href="#biryani">Biryani</a>
                  <a href="#burger">Burger</a>
                  <a href="#pizza">Pizza</a>
                  <a href="#chicken">Chicken</a>
                  <a href="#sandwich">Sandwich</a>
                  <a href="#beverage">Beverage</a>
                </div>
              </nav>
            </div>
            {uniqueCategories.map((category) => (
              <CategoryFood
                key={category}
                data={food.filter((item) => item.category === category)}
                category={category}
              />
            ))}
          </div>
          <div className=" Cart shadow  col-lg-4 col-xl-3  px-2     ">
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
