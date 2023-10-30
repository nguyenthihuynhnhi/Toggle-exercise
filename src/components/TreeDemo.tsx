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

function flattenTree(tree, keyPrefix = "0", result = []) {
    const { id, name, children } = tree;
    const key = keyPrefix;

    const flattenedNode = {
        title: name,
        key,
    };

    result.push(flattenedNode);

    if (children) {
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const childKey = `${key}-${i}`;
            flattenTree(child, childKey, result);
        }
    }

    return result;
}




function TreeDemo({ objData }) {
    console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ objData:", objData)


    const dataTreeAntd = flattenTree(objData)
    console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ dataTreeAntd:", dataTreeAntd)

    const treeData: DataNode[] = [
        {
            title: 'layer 1',
            key: '0-0',
            children: [
                {
                    title: "layer 1 - 1",
                    key: "0-0-0",
                    children: [
                        {
                            title: "layer 1 - 1 - 1",
                            key: "0-0-0-0",
                            children: [
                                {
                                    title: "layer 1 - 1 - 1 - 1",
                                    key: "0-0-0-0-0",
                                    children: [
                                        {
                                            title: "layer 1 - 1 - 1 - 1 - 1",
                                            key: "0-0-0-0-0-0",

                                        },

                                    ]

                                },


                            ],

                        }

                    ],
                },
                {
                    title: "layer 1 - 2",
                    key: "0-0-1",
                    children: [{
                        title: "layer 1 - 2 - 1",
                        key: "0-0-1-0",
                    }
                        , {

                        title: "layer 1 - 2 - 2",
                        key: "0-0-1-1",
                    }, {

                        title: "layer 1 - 2 - 3",
                        key: "0-0-1-2",
                    }
                    ],
                },
            ],
        },
    ];



    return (
        <Tree

            defaultExpandedKeys={['0-0-0', '0-0-1']}
            treeData={[objData]}
        />
    );
}

export default TreeDemo