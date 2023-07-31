import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { BsMicrosoft } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { TbBrandAmazon } from "react-icons/tb";
const Home = () => {
  return (
    <>
      <div>
        <Container className="container_1">
          <h1> Learn to code-for free</h1>
          <h1> Build projects</h1>
          <h1> Earn certification</h1>
          <strong className="pg_1">
            Since 2014 more than 40,000 freeCodeCamp.org graduates have gotten
            <br />
            jobs at tech companies including:
          </strong>
          <br />
          <ul className="pg_2">
            <li className="li_2">
              <AiFillApple /> Google{" "}
            </li>
            <li className="li_2">
              <BsMicrosoft /> Microsoft{" "}
            </li>
            <li className="li_2">
              <BsSpotify />
              spotify{" "}
            </li>
            <li className="li_2">
              <TbBrandAmazon /> Amazon.com{" "}
            </li>
          </ul>
          <br />
          <button className="btn_2">Get Started(it's free)</button>
        </Container>
      </div>
    </>
  );
};

export default Home;
