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
            to: "/link1",
          },
          {
            label: "Link2",
            to: "/link2",
          },
          {
            label: "Link3",
            to: "/link3",
          },
          {
            label: "custom styled link",
            to: "/link4",
            className: "nav-secondary",
          },
          {
            label: "Link 5",
            to: "/link5",
          },
          {
            label: "Link 6",
            to: "/link6",
          },
        ]}
      />
    </div>
  );
};

export default NavBarStories;
