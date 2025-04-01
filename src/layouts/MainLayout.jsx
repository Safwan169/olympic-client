import React from 'react';
import Navbar from '../componants/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../componants/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />  {/* 🟢 Required to load child pages correctly */}
            </main>
            <Footer />

        </>
    );
};

export default MainLayout;