import React from 'react'
import { Outlet } from 'react-router-dom';
import './HomeLayout.scss';
import HeaderLayout from '../header/HeaderLayout';

const HomeLayout = () => {
    return (
        <div className='home-layout-container'>
            <HeaderLayout />
            <div className='home-layout-body'><Outlet /></div>
        </div>
    )
}

export default HomeLayout;