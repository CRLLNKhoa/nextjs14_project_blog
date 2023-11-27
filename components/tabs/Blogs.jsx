"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { getBlog } from "@/actions";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

export default function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getBlog();
        setData(result?.data);
      } catch (error) {
        console.log("Lấy blogs bị lỗi!", error);
      }
    };
    getData();
  }, []);

  if (data?.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        <Skeleton className="w-full h-[200px] rounded-md" />
        <Skeleton className="w-full h-[200px] rounded-md" />
        <Skeleton className="w-full h-[200px] rounded-md" />
        <Skeleton className="w-full h-[200px] rounded-md" />
        <Skeleton className="w-full h-[200px] rounded-md" />
        <Skeleton className="w-full h-[200px] rounded-md" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4 pb-10">
      {data?.map((item) => (
        <CardBlog
          key={item.id}
          blog={item}
        />
      ))}
    </div>
  );
}

function CardBlog({ blog }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/project/${blog?.id}`)}
      className="flex flex-col cursor-pointer dark:bg-slate-800 gap-2 p-2 shadow-lg rounded-md justify-between"
    >
      <img
        src={blog?.thumbnail}
        alt="img"
        className="rounded-md"
      />
      <div className="mb-auto truncate">
        <Link
          href={`/project/${blog.id}`}
          className="font-bold text-sm dark:text-white leading-none truncate no-underline text-black hover:text-sky-500 duration-300"
        >
          {blog?.title}
        </Link>
        <p className="text-[12px]">Lương Khoa</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-muted-foreground">Free</p>
        {blog.progress === 100 && (
          <div className="flex gap-1 text-green-600">
            <BsCheckLg className="animate-pulse" />
            <p className="text-[12px]">Complete</p>
          </div>
        )}
        {blog.progress !== 100 && (
          <div className="flex gap-1 text-red-600">
            <AiOutlineLoading3Quarters className="animate-spin" />
            <p className="text-[12px]">{blog?.progress}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
