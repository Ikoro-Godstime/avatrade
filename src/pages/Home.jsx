/*eslint-disable */
import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Partners from "../components/Partner/Partners";
import Trusted from "../components/Trusted/Trusted";
import Reason from "../components/Reason/Reason";
import Sharpen from "../components/Sharpen/Sharpen";
import SafeHands from "../components/SafeHands/SafeHands";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/snl3qnlltg2jt07n00nymf66ahlzlnpf.js";
    document.body.append(script);
  }, []);

  return (
    <>
      <Header />
      <SafeHands />
      <Sharpen />
      <Reason />
      <Partners />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;