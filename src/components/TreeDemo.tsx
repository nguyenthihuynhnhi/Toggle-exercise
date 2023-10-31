import React, { useEffect, useState } from 'react'
import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';
import "../../src/app/style/custom-styles.css"








function TreeDemo({ objData }) {

    console.log(objData);

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