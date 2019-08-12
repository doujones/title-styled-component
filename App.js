import React from 'react';
import  Superman1  from "./components/Superman"
import './App.css';
import image1 from "./components/images/img1.jpg"
import image2 from "./components/images/img2.jpg"
import image3 from "./components/images/img3.jpg"
import Boswell from "./components/boswell"
function App () {
  return(
    <div>
    <Superman1 img={image1}>
    <Boswell title="Hello Boswell"/>
    </Superman1>
    <superman1 boswell/>
    <hr/>
    <Superman1 img={image2}/>
    <hr/>
    <Superman1 img={image3}/>
    </div>
  )
}
export default App;
