import React from "react"
import styled from "styled-components";

const Boswell = ({title, children}) => {
  return ( 
   <BoswellWrapper>
  <h1>
  {title}
  {children}
  </h1>
  <p></p>
  </BoswellWrapper>
 );
}

const BoswellWrapper = styled.div`
  color: blue;
  font-size: 30px;
  text-transform: capitalize;
  text-align: center;
  h1:hover{
    color: red;
    transition: all 1.5s ease-in-out;
  }

`
export default Boswell;