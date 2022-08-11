import React from "react";
import Styled from "styled-components";



const Layout = ({ children }) => {
  return (
    <StLayout>
      {children}
    </StLayout>
  );
};


export default Layout;

const StLayout = Styled.div`
    margin : 0 auto; 
    max-width:1920px;
    min-width:1200px;
    height:820px;
  
   `









