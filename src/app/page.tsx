"use client"
import './style/custom-styles.css';
import React from 'react';
import { Button } from 'antd';
import TreeDemo from '../components/treeDemo';

const data = [
  { id: 1, name: "layer 1", level: 1 },
  { id: 2, name: "layer 1 - 1", level: 2, ownerId: 1 },
  { id: 3, name: "layer 1 - 2", level: 2, ownerId: 1 },
  { id: 4, name: "layer 1 - 1 - 1", level: 3, ownerId: 2 },
  { id: 5, name: "layer 1 - 1 - 1 - 1", level: 4, ownerId: 4 },
  { id: 6, name: "layer 1 - 1 - 1 - 1 - 1", level: 5, ownerId: 5 },
  { id: 7, name: "layer 1 - 2 - 2", level: 3, ownerId: 3 },
  { id: 8, name: "layer 1 - 2 - 3", level: 3, ownerId: 3 },
];

interface Layer {
  id: number;
  name: string;
  level: number;
  ownerId?: number;
}

function transformData(data: Layer[]) {
  //tìm đc level 1 đầu tiên
  const level1 = data.find((item) => {
    return item.level === 1
  })
  console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ level1:", level1)


  const level2 = data.filter((item) => {
    return item.level === 2
  })
  level1.childs = level2;

  const level3 = data.filter((item) => {
    return item.level === 3
  })
  level2.childs = level3;
  const level4 = data.filter((item) => {
    return item.level === 4
  })
  level3.childs = level4;

  const level5 = data.filter((item) => {
    return item.level === 5
  })
  level4.childs = level5;


  return level1;
}

const YourComponent = () => {
  const objData = transformData(data);

  return (
    <div>
      <TreeDemo objData={objData} />
    </div>
  );
};

export default YourComponent;