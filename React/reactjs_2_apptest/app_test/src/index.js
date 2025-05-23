import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import for part 3
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));


//1 default render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//-----------------------------------------------------------
//2 or we can just render part of things using constant

// const heading1=<h1>hello from heading1</h1>
// root.render(heading1);


//-----------------------------------------------------------
//3 or we can render part of things using components (dont forget import above)

root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
