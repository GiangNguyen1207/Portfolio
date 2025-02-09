import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import RoutesApp from "./Routes";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <RoutesApp />
      <Footer />
    </>
  );
}

export default App;
