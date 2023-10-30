"use client"
import './style/custom-styles.css';
import React from 'react';
import { Button } from 'antd';
import TreeDemo from '../components/TreeDemo';


interface TreeNode {
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
  const node = input.find((item) => {
    if (item.id === parentId) {
      item.title = item.name;
      return true
    }
  });

  if (!node) return null;

  const children = input.filter((item) => item.ownerId === parentId);

  if (children.length > 0) {
    node.children = children.map((child) => buildTree(input, child.id)) as TreeNode[];
  }

  return node;
}

// const result = buildTree(input);


const YourComponent = () => {
  const result = buildTree(input);
  // console.log(result);

  return (
    <div>
      <TreeDemo objData={result} />
    </div>
  );
};

export default YourComponent;