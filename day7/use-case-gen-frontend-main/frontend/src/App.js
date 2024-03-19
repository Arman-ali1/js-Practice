import {useState} from 'react';


import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Header from './Header';
import Footer from './Footer';
import Page6 from './Page6';
//import Header
import Heade from './Header/Heade.jsx';
import  Home from './Home/Home.jsx';
import Enquiry from './Enquiry/Enquiry.jsx';
import A from './f1/A.jsx';
import Form from './Form/Form.jsx';
import Foot from './footer/Foot.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='root'>
      <Heade />
      <Home />
      <Enquiry />
      <Page2/>
      <Page3 />
      <Footer/>
      <Page4/>
      <Header/>
      <Page5/>
      <Page6/>
      <A/>
      <Form/>
    {/* <Foot/> */}
    </div>
  )
}

export default App;

