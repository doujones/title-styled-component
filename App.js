import React from 'react';
import  Superman1  from "./components/Superman"
import './App.css';
import image1 from "./components/images/img1.jpg"
import Boswell from "./components/boswell"
function App () {
  return(
    <div>
    <Superman1 img={image1}>
    <Boswell title="Hello Boswell"/>
    </Superman1>
    <superman1 boswell/>
    </div>
  )
}
export default App;
