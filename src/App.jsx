import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyAccount from "./component/MyAccount/MyAccount";
import CelebrityOrder from "./component/CelebrityOrder/CelebrityOrder";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import CelebrityScript from "./component/CelebrityScript/CelebrityScript";
import BPromotion from "./component/BusinessPromotion/BPromotion";

const App = () => {
  return (
    <>
      <Header />
      {/* <CelebrityScript /> */}
      <CelebrityOrder />
      {/* <MyAccount/> */}
      {/* <BPromotion/> */}
      <Footer />
    </>
  );
};

export default App;
