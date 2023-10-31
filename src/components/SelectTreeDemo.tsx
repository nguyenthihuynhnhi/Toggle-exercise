import React from 'react'
import { Select, Space } from 'antd';
import { TreeNode } from '../app/page';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

function SelectTreeDemo({ data }: { data: TreeNode[] }) {

    const dataSelectAntd = data.map((item) => {
        return { value: item.id, label: item.name }
    })




    return (
        <div>
            <Space wrap>

                <Select
                    defaultValue={dataSelectAntd[0].label}
                    style={{ width: 200 }}
                    onChange={handleChange}
                    options={dataSelectAntd}
                />

            </Space>


        </div>
    )
}

export default SelectTreeDemo