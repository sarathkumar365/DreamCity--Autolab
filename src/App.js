import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomepageComp from './components/HomepageComp.jsx'

import Services from './components/AllServicesComp.jsx'
import Tint from './components/TintComp.jsx'
// import Contact from './components/ContactComp.jsx'

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomepageComp />} />   
          <Route path='/services' element={<Services />} />
          <Route path='/tint' element={<Tint />} />
        </Routes>
      </div>
    </>
  );
  // return (
  //   <div className="App">
  //     <div className="home">
  //         <HomepageComp/>
  //     </div>
  //   </div>
  // );
}

export default App;


