import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from 'src/components/ui/navbar/NavBar';
import './HomeLayout.scss';

const HomeLayout = () => {
    return (
        <div className='home-layout-container'>
            <div className='home-layout-header'>
                <NavBar
                    navOptions={[
                        {
                            label: "Home",
                            to: "",
                        },
                        {
                            label: "Components",
                            to: "components",
                        },
                        {
                            label: "SignUp",
                            to: "",
                        },
                        {
                            label: "Search Articles",
                            to: "",
                        },
                    ]} />
            </div>
            <div className='home-layout-body'><Outlet /></div>
        </div>
    )
}

export default HomeLayout;