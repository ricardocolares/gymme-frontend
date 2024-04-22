import React from 'react';

import { mockListBeginnerA } from '../mocks/mockListBeginner';
import { mockListIntermediateA } from '../mocks/mockListIntermediate';
import { mockListAdvancedA } from '../mocks/mockListAdvanced';

const DayA = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {mockListBeginnerA.map((item, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-bold">{item.WorkOut}</h3>
          <p className="text-sm">Muscle: {item.Muscles}</p>
          <p className="text-sm">Repetitions: {item.Sets}</p>
        </div>
      ))}
    </div>
  );
};

export default DayA;