import styled from "styled-components";
import image2 from "../components/images/img2.jpg"



const Superman1 = styled.div`
min-height: ${(props)=> props.boswell ? "40vh" : "50vh"};
background-image: url(${props => (props.img ? props.img: image2)});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;

export default Superman1;