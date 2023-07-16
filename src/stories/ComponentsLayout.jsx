import { Outlet } from "react-router-dom";
import "./ComponentsLayout.scss";
import NavBar from "src/components/ui/navbar/NavBar";

const ComponentsLayout = () => {
  return (
    <div className="nav-layout-container flex flex-row">
      <div className="nav-layout">
        <NavBar
          className="flex flex-column p10"
          navOptions={[
            {
              label: "Button",
              to: "buttons",
            },
            {
              label: "Text Field",
              to: "text-fields",
            },
            {
              label: "Navbar",
              to: "navbar",
            },
            {
              label: "Modal",
              to: "modals",
            },
            {
              label: "Chip",
              to: "chips",
            },
            {
              label: "Toast",
              to: "toasts",
            },
            {
              label: "Theme",
              to: "theme",
            },
            {
              label: "Article Summary",
              to: "article-summary",
            },
            {
              label: "Article Details",
              to: "article-details",
            },
          ]}
        ></NavBar>
      </div>
      <div className="nav-body flex flex-column m10">
        <Outlet />
      </div>
    </div>
  );
};

export default ComponentsLayout;
