import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Header from './header/Header';
import Footer from './footer/Footer';

ReactDOM.render(
  <>
  <React.StrictMode>
    <Header />
  </React.StrictMode>
  </>,
  document.getElementById('header')
);
ReactDOM.render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>,
  document.getElementById('root')
);
ReactDOM.render(
  <>
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
  </>,
  document.getElementById('footer')
);
reportWebVitals();
