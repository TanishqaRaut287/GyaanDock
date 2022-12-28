import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import QuestionHomepage from './components/questions/QuestionHomepage';
import AboutUspage from './components/aboutUs/aboutUs';
import SolveQuestion from './components/questions/SolveQuestion';
import Auth from './components/auth/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/questions' element={<QuestionHomepage />} />
      <Route path='/aboutUs' element={<AboutUspage />} />
      <Route path='/questions/:id' element={<SolveQuestion />} />
      <Route path='/signIn' element={<Auth/>}/>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
