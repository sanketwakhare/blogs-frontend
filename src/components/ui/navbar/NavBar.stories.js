import React from "react";
import NavBar from "./NavBar";

const NavBarStories = () => {
  return (
    <div>
      <h4>NavBar</h4>
      <NavBar
        navOptions={[
          {
            label: "Link1",
            to: "/",
          },
          {
            label: "Link2",
            to: "/",
          },
          {
            label: "Link3",
            to: "/",
          },
          {
            label: "Link 4",
            to: "/",
          },
          {
            label: "Link 5",
            to: "/",
          },
          {
            label: "Custom Styled Link",
            to: "/",
            className: "nav-custom",
          },
        ]}
      />
    </div>
  );
};

export default NavBarStories;
