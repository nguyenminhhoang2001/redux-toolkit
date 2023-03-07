import { Carousel, Col, Row } from "antd";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState, useEffect } from "react";
import { ProductApi } from "../../API/PRODUCTApi/ProductApi";
import ListProduct from "./ListProduct";
const contentStyle = {
  margin: 0,
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Slice = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <div style={contentStyle}></div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};
export default Slice;
