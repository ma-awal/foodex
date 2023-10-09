import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Checkout.css';
import Address from '../../components/Address/Address';
import OrderCard from '../../components/OrderCard/OrderCard';
import Signin from '../../components/Signin/Signin';
import Payment from '../../components/Payment/Payment';
import Confirm from '../../components/Confirm/Confirm';
const Tab_Data = [
  {
    id: uuidv4(),
    name: 'Signin',
    Items: <Signin />,
  },

  {
    id: uuidv4(),
    name: 'Billing',
    Items: <Address />,
  },

  {
    id: uuidv4(),
    name: 'Order',
    Items: <OrderCard />,
  },
  {
    id: uuidv4(),
    name: 'Payment',
    Items: <Payment />,
  },

  {
    id: uuidv4(),
    name: 'Finished',
    Items: <Confirm />,
  },
];

const Checkout = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="Tabs   ">
      <div className="container    ">
        <div className="row  justify-content-center      ">
          <div className="col-12 col-lg-7   ">
            <div className="d-flex align-items-center justify-content-between btn-container mb-5   ">
              {Tab_Data.map((tab, index) => (
                <button
                  key={index}
                  className={`text-center   border-0 btn ${
                    activeTab === index ? 'btn active' : ''
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="  round-btn">{index}</span>
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="tab-content ">
              {Tab_Data.map((tab, index) => (
                <div
                  key={index}
                  className={` tab-pane fade  ${
                    activeTab === index ? ' show active' : ''
                  }`}
                >
                  {tab.Items}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
