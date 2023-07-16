import NavBar from 'src/components/ui/navbar/NavBar';

const HeaderLayout = () => {
    return (
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
    )
}

export default HeaderLayout;
