// // src/NavigationAlert.js
// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const NavigationAlert = () => {
//   const location = useLocation();

//   useEffect(() => {
//     alert('Page navigated');
//   }, [location]);

//   return null; // This component does not render anything
// };

// export default NavigationAlert;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GlobalAlert() {
  const location = useLocation();
  useEffect(() => {
    alert("Page Navigated");
  }, [location]);
  return null;
}

export default GlobalAlert;
