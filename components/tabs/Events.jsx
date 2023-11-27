"use client";
import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import axios from "axios";
import Link from "next/link";
import dayjs from "@/lib/dayjs";
import { cn } from "@/lib/utils";
import { IoTimeOutline } from "react-icons/io5";
export default function Events() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://api.github.com/users/CRLLNKhoa/events?per_page=10")
        .then(function (response) {
          // handle success
          setData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    getData();
  }, []);
  console.log(data);
  if (!data) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6 gap-4">
        <Skeleton className="w-full h-[80px] rounded-md" />
        <Skeleton className="w-full h-[80px] rounded-md" />
        <Skeleton className="w-full h-[80px] rounded-md" />
        <Skeleton className="w-full h-[80px] rounded-md" />
        <Skeleton className="w-full h-[80px] rounded-md" />
        <Skeleton className="w-full h-[80px] rounded-md" />
        <Skeleton className="w-full h-[80px] rounded-md" />
        <Skeleton className="w-full h-[80px] rounded-md" />
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div className="w-full h-[200px] flex justify-center flex-col items-center">
        <svg
          width="72px"
          height="72px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="SVGRepo_bgCarrier"
            stroke-width="0"
          ></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
              fill="#333333"
            ></path>{" "}
            <path
              d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
              fill="#333333"
            ></path>{" "}
            <path
              d="M33 20C33 21.1046 32.1046 22 31 22C29.8954 22 29 21.1046 29 20C29 18.8954 29.8954 18 31 18C32.1046 18 33 18.8954 33 20Z"
              fill="#333333"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5673 33.8235L18.5691 33.8223L18.5872 33.8101C18.6045 33.7986 18.6323 33.7803 18.6699 33.7563C18.7451 33.7082 18.8591 33.6371 19.0069 33.5507C19.303 33.3775 19.7307 33.1448 20.2485 32.9122C21.2987 32.4403 22.6508 32 24 32C25.3491 32 26.7012 32.4403 27.7514 32.9122C28.2693 33.1448 28.6969 33.3775 28.9931 33.5507C29.1408 33.6371 29.2549 33.7082 29.33 33.7563C29.3676 33.7803 29.3954 33.7986 29.4127 33.8101L29.4308 33.8223L29.4327 33.8235C29.4325 33.8234 29.4328 33.8236 29.4327 33.8235M29.4327 33.8235C29.4329 33.8237 29.4335 33.8241 29.4338 33.8243C29.8885 34.1366 30.5104 34.0217 30.8235 33.5673C31.1368 33.1125 31.0221 32.4898 30.5673 32.1765L30.0333 32.9516C30.5673 32.1765 30.5675 32.1766 30.5673 32.1765L30.5651 32.175L30.5619 32.1728L30.5523 32.1663L30.5205 32.1449C30.4938 32.1272 30.4562 32.1025 30.4083 32.0718C30.3126 32.0106 30.1757 31.9254 30.0028 31.8243C29.6578 31.6225 29.1662 31.3552 28.5711 31.0878C27.3955 30.5597 25.7476 30 24 30C22.2523 30 20.6045 30.5597 19.4289 31.0878C18.8338 31.3552 18.3421 31.6225 17.9971 31.8243C17.8243 31.9254 17.6873 32.0106 17.5916 32.0718C17.5438 32.1025 17.5062 32.1272 17.4795 32.1449L17.4476 32.1663L17.438 32.1728L17.4348 32.175L17.4336 32.1758C17.4334 32.176 17.4327 32.1765 18 33L17.4327 32.1765C16.9779 32.4898 16.8631 33.1125 17.1765 33.5673C17.4897 34.022 18.1125 34.1365 18.5673 33.8235"
              fill="#333333"
            ></path>{" "}
          </g>
        </svg>
        <p className="">Danh sách trống!</p>
      </div>
    );
  }
  return (
    <div className="flex-1 pt-2 lg:p-2 lg:pl-8">
      <div className="relative">
        <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

        {data?.map((item) => (
          <div
            key={item.id}
            className="flex items-center w-full my-6 -ml-1.5"
          >
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div className="w-11/12">
              <div className="flex items-center">
                <p className="mr-1">Type:</p>
                <span
                  className={cn(
                    "text-white bg-black px-2",
                    item.type === "PushEvent" && "bg-red-600",
                    item.type === "IssueCommentEvent" && "bg-purple-600",
                    item.type === "CreateEvent" && "bg-green-600",
                    item.type === "IssuesEvent" && "bg-orange-600",
                    item.type === "WatchEvent" && "bg-sky-600"
                  )}
                >
                  {item.type}
                </span>
                <p className="ml-4 font-bold hidden lg:block">
                  Repo: {item.repo.name}
                </p>
                <Link
                  className="ml-2 text-sky-600 font-bold"
                  href={`https://github.com/${item.repo.name}`}
                  target="_blank"
                >{`[${item.repo.id}]`}</Link>
              </div>
              <p className="text-xs text-gray-500 font-semibold capitalize flex items-center gap-2">
                <IoTimeOutline /> {dayjs(item.created_at).fromNow()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
