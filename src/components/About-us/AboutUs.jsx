import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";
import Header from "../Nav/Header";

const AboutUs = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__content">
                <h2>About Us</h2>
                <p>
                  Welcome to Loan Life Website, a cutting-edge loan management system designed to streamline and enhance the lending process for financial institutions worldwide. At Loan Life, we are dedicated to revolutionizing how loans are processed, managed, and serviced. With our robust technology and innovative solutions, we empower lenders to efficiently handle loan applications, approvals, disbursements, and repayments with utmost precision and security.
                </p>

                <div className="about__counter">
                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={25} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Total Loans</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={12} duration={2} suffix="M" />
                      </span>

                      <p className="counter__title">Customers Around World</p>
                    </div>
                  </div>

                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={95} duration={2} suffix="M" />
                      </span>

                      <p className="counter__title">Ideas Raised Funds</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={5} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Categories Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
