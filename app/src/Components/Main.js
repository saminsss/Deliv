import React from 'react';
import Toolbar from "./MainComponents/Toolbar";
import Featured from "./MainComponents/Featured";
import Banner from "./MainComponents/Banner";
import Products from "./MainComponents/Products";
import Category from "./MainComponents/Category";
import BrowsingHistory from "./MainComponents/BrowsingHistory";
import Team from "./MainComponents/Team";
import Contact from "./MainComponents/Contact";

function Main() {
    return (
        <main id="main">
            <Toolbar />
            <Featured />
            <Banner />
            <Products />
            <Category />
            <BrowsingHistory />
            <Team />
            <Contact />
        </main>
    );
}

export default Main

