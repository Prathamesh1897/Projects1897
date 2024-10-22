import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Grab the food fast",
    },
    {
      image: ChooseMeals,
      title: "Choose offers",
      text: "Seize the Deal: Savings Await!",
    },
    {
      image: DeliveryMeals,
      title: "Fast delivery",
      text: "Speedy Delivery: Because Time Matters!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How it work</h1>
        <p className="primary-text">
          Order your favorite meals from local restaurants through our
          user-friendly food page. Browse menus, customize your order, and
          easily make secure payments. Once your order is confirmed, our team
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt=""></img>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
