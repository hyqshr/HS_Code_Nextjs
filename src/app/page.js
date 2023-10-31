// pages/page.js (or the actual filename)
import React from 'react';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
// import { sendRequest } from '../utilities/api';

const Home = () => {
  // You can use sendRequest here if needed
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Home;

