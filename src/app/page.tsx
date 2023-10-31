"use client"
import './style/custom-styles.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import TreeDemo from '../components/TreeDemo';
import SelectTreeDemo from '../components/SelectTreeDemo';
import { myAction } from './server/actions/actions';

export interface TreeNode {
  id: number;
  name: string;
  ownerId?: number;
  children?: TreeNode[];
  level: number;
  title?: string
}
const input: TreeNode[] = [
  { id: 1, name: "layer 1", level: 1 },
  { id: 2, name: "layer 1 - 1", level: 2, ownerId: 1 },
  { id: 3, name: "layer 1 - 2", level: 2, ownerId: 1 },
  { id: 4, name: "layer 1 - 1 - 1", level: 3, ownerId: 2 },
  { id: 5, name: "layer 1 - 1 - 1 - 1", level: 4, ownerId: 4 },
  { id: 6, name: "layer 1 - 1 - 1 - 1 - 1", level: 5, ownerId: 5 },
  { id: 7, name: "layer 1 - 2 - 2", level: 3, ownerId: 3 },
  { id: 8, name: "layer 1 - 2 - 3", level: 3, ownerId: 3 },
];


function buildTree(input: TreeNode[], parentId: number = 1) {
  let copyInput: TreeNode[]
  copyInput = JSON.parse(JSON.stringify(input));

  const node = copyInput.find((item) => {
    if (item.id === parentId) {
      item.title = item.name;
      return true
    }
  });

  if (!node) return null;

  const children = copyInput.filter((item) => item.ownerId === parentId);

  if (children.length > 0) {
    node.children = children.map((child) => buildTree(copyInput, child.id)) as TreeNode[];
  }

  return node;
}

const handlMyAction = async () => {

}

const YourComponent = () => {

  const [dataActions, setDataActions] = useState<TreeNode[]>([])

  const fetchData = async () => {
    const response = await myAction({ type: "getAlldata" });
    console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ response:", response)
    if (!response) return
    setDataActions(response)
  }


  useEffect(() => {
    fetchData();
  }, []);

  const result = buildTree(dataActions)


  return (
    <div className="container" >
      <div className='flex flex-col items-center ' >
        <div>
          <div className='flex items-center'>
            <span className='pr-2'>Choose:</span>
            <SelectTreeDemo data={input} />
          </div>
          <div>

            <Button onClick={() => { handlMyAction() }} type="primary">Primary Button</Button>

          </div>
          <div className='pl-20' >
            <TreeDemo objData={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;