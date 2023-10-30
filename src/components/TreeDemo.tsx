import React from 'react'
import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';


type TreeNode = {
    id: number;
    name: string;
    childs?: TreeNode[];
};

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




const treeData: DataNode[] = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' }],
            },
        ],
    },
];

function TreeDemo(props) {

    const data = props

    return (
        <Tree

            defaultExpandedKeys={['0-0-0', '0-0-1']}
            treeData={treeData}
        />
    );
}

export default TreeDemo