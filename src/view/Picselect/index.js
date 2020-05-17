import React from 'react';
import SelectPic from '../../components/SelectPic';
import { picList } from '../../public/Alldate.js';
const selectValue = value => {
  console.log(value);
};
function Index() {
  return (
    <div className="picselect">
      <SelectPic picList={picList} onChange={selectValue} />
    </div>
  );
}

export default Index;
