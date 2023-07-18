import React, { Fragment } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Products from "../components/products/Products";
import {Navbar , Sidebar } from "../components/layout";  
import {Products} from "../components/products";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="has-background-light">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-3">
                <div className="box">
                  <Sidebar />
                </div>
              </div>
              <div className="column is-9">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
