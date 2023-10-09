import FoodCard from '../FoodCard/FoodCard';
import './style.css';
import React from 'react';

const CategoryFood = ({ data, category }) => {
  return (
    <>
      <section
        className="single-section my-3 py-3 py-md-4 py-lg-5 shadow"
        id={category}
      >
        <div className="container">
          <h3 className="mb-4 text-capitalize">{category}</h3>
          <div className="row gy-5 gy-md-4 ">
            {data.map((item) => {
              return (
                <div className="col-12 col-xl-6  " key={item.id}>
                  <FoodCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryFood;
