import React from 'react';
import Scrolist from '../../components/Scrollist';
import { listData } from '../../public/Alldate.js';
function Index() {
  return (
    <div className="index">
      <Scrolist allData={listData} />
    </div>
  );
}

export default Index;
