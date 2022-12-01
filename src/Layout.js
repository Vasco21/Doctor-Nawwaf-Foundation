import React from "react";
import Home from "./screens/sections/HomeSection/Hero";
// import Header from "./Header";
import GlobalStyles from "./Styles/GlobalStyles";
import TopSection from './screens/sections/TopSection';


function Layout(props) {
  return (
    <>
      <GlobalStyles/>
    <div className="app">
      <main>
        <div className="app-content">{props.children}</div>
        <TopSection/>
        <Home/>
      </main>
    </div>
    </>
  );
}

export default Layout;