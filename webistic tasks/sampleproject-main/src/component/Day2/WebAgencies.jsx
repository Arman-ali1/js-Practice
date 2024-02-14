import React from "react";
import "../Day2/WebAgencies.css";

function WebAgencies() {
  return (
    <>
      <div className="container-fluid  pt-5 pb-5 bg">
        <div className="container pt-4 text-center">
          <h2 className="px-6 bg">
            Creative Web Agency Delievering{" "}
            <span style={{ color: "rgb(108 56 185)" }}>Custom Solutions</span>
          </h2>
          <div className="row">
            <div className="col-md-4 pt-4 ">
              <div className="d-flex">
                <p className="p px-3">
                  Tailored Branding Strategies To Drive Engagement
                </p>
                <img src="img/123.png" className="abc" alt="123" />
              </div>
            </div>
            <div className="col-md-4 pt-4">
              <div className="d-flex">
                <p className="p">
                  Effective Marketing Campaigns To Generate Growth
                </p>
                <img src="img/123.png" className="bcd" alt="123" />
              </div>
            </div>
            <div className="col-md-4 pt-4">
            <div className="d-flex">
              <p className="p">
                Custom Web Design Solutions To Drive Conversions
              </p>
              <img src="img/123.png" className="cde" alt="123" />
              </div>
            </div>
            <div className="col-md-6 pt-3 px-7">
              <div className="d-flex">
                <img
                  src="img/star2.png"
                  className="img1"
                  width={"40px"}
                  alt="star"
                />
                <p className="p ps-5 ms-2">5 Star DesignRush Review</p>
                <img src="img/123.png" className="def" alt="123" />
              </div>
              <p className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </p>
            </div>
            <div className="col-md-6 pt-3 ">
              <p className="p px-8">Latest Web Design Award</p>
              <img
                src="img/cda.png"
                className="img"
                width={"160px"}
                alt="designaward"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebAgencies;
