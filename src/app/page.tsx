"use client";
import "./style/custom-styles.css";
import React, { useEffect, useState } from "react";
import { Select, Tree } from "antd";
import { getAllData, getDataById } from "../server/actions/actions";
import { buildTree } from "../helpers/buildTree";
import { I_select } from "../interface/interface";
import { buildSelect } from "../helpers/buildSelect";
import { DataNode } from "antd/es/tree";

const handlMyAction = async () => { };
const YourComponent = () => {
  const [dataTree, setDataTree] = useState<DataNode>();

  const [dataSelect, setDataSelect] = useState<I_select[]>([]);

  //lấy dữ liệu khi mới vào trang web
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllData();

      console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ response:", response);

      if (!response) return;

      const dataSelect = buildSelect(response);

      const dataTree = buildTree(response);

      setDataSelect(dataSelect);

      setDataTree(dataTree as DataNode);
    };

    fetchData();
  }, []);

  const handleChange = async (value: string) => {
    const response = await getDataById(Number(value));

    const dataTree = buildTree(response, (Number(value)));

    setDataTree(dataTree as DataNode);
  };

  return (
    <div className="container">
      <div className="flex items-start ">
        <div className="flex items-center">
          <span className="pr-2">Choose:</span>
          {dataSelect.length > 0 ? (
            <Select
              defaultValue={dataSelect[0]?.label}
              style={{ width: 200 }}
              onChange={handleChange}
              options={dataSelect}
            />
          ) : (
            ""
          )}
        </div>
        <div className="pl-20">
          {dataTree && <Tree treeData={[dataTree]} />}
        </div>

      </div>
    </div>
  );
};

export default YourComponent;
