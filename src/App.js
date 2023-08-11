import React from 'react';
import Layout from './Layout';
import RouterCommon from './common/RouterCommon';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
   <Layout> 
      <RouterCommon />
   </Layout>
   </BrowserRouter>
  );
}

export default App;
