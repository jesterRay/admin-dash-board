import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideBar from './components/SideBar';
import Progress from './components/Progress';
import NewAdmin from './components/NewAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <SideBar></SideBar>
      <div id='middle_dash_board'>
        <Progress></Progress>
        <NewAdmin></NewAdmin>
      </div>
    </main>
  </React.StrictMode>
);
