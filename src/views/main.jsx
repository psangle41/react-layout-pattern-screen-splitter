import React from 'react';
import SplitScreen from '../components/split-screen';
import Dashboard from './dashboard';
import Sidebar from '../components/sidebar';

function Main() {
  return (
    <SplitScreen leftwidth={1} rightWidth={3}>
      <Sidebar />
      <Dashboard />
    </SplitScreen>
  );
}

export default Main;
