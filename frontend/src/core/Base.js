import React from "react";
import NavigationBar from "./NavigationBar";
import Body from "./Body";
import Footer from "./Footer";

const Base = ({
  title = "Learn And Grow",
  description = "My description",
  className = "bg-light text-#0c0c0c p-4",
  children,
}) => (
  <div>
    <NavigationBar />
    <Body />
    <div className={className}>{children}</div>

    <Footer />
  </div>
);
export default Base;
