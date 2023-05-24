import React from 'react';
import Menu from '../components/Menu/Menu';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;