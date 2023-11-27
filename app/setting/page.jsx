"use client";
import React, { useEffect, useState } from "react";
import Tables from "./Table";
import { AddButton } from "./AddButton";
import { getBlog } from "@/actions";

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getBlog();
        setData(result?.data);
      } catch (error) {
        console.log("Lấy blogs bị lỗi!");
      }
    };
    getData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="flex w-full justify-between border-y py-4 items-center">
        <h1 className="font-bold text-xl">Danh sách dự án:</h1>
        <AddButton updateData={setData} list={data} />
      </div>
      <Tables updateData={setData} data={data} />
    </div>
  );
}
