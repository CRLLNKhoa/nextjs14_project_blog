"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { MdOpenInNew } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGlobe, FaFacebook ,FaLocationDot  } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

export default function Profile() {
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://api.github.com/users/CRLLNKhoa")
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

  if(!data){
    return (
      <div id="profile" className="mb-4">
         <Skeleton className="w-full h-[284px] rounded-full" />
        <Skeleton className="w-1/2 h-[20px] rounded-md mt-4" />
        <Skeleton className="w-full h-[80px] rounded-md mt-4" />
        <Skeleton className="w-full h-[30px] rounded-md mt-4" />
        <Skeleton className="w-1/2 h-[20px] rounded-md mt-4" />
        <Skeleton className="w-full h-[20px] rounded-md mt-4" />
      </div>
    )
  }


  return (
    <div className="mb-4 col-span-4 lg:col-span-1">
      <Avatar className="w-full h-auto m-auto select-none">
        <AvatarImage
          src={data?.avatar_url}
          alt="@shadcn"
        />
        <AvatarFallback className="w-full h-auto select-none">
          VN
        </AvatarFallback>
      </Avatar>
      <h1 className="font-bold text-xl mt-10 leading-4">{data?.login}</h1>
      <p className="text-md text-sky-600">{data?.name}</p>
      <p className="text-sm text-start mt-4">{data?.bio}</p>
      <Button
        asChild
        onClick={() => router.push("/")}
        className="w-full rounded-sm bg-slate-200 text-primary font-bold hover:bg-sky-600 
      hover:text-white duration-300 mt-4"
      >
        <Link
          href={data?.html_url || "/"}
          target="_blank"
        >
          <MdOpenInNew className="w-4 h-4 font-bold mr-2" /> See on Github
        </Link>
      </Button>

      <div className="flex gap-4 mt-6 items-center">
        <FaLocationDot className="w-5 h-5" />
        <p className="font-semibold">{data?.location}</p>
      </div>
      <div className="flex gap-4 mt-2 items-center">
        <FaGlobe className="w-5 h-5" />
        <p className="font-semibold">{data?.blog}</p>
      </div>
      <div className="flex gap-4 mt-2 items-center">
        <FaFacebook   className="w-5 h-5" />
        <p className="font-semibold">{"lnkhoa1205"}</p>
      </div>
      <div className="flex flex-col gap-2 mt-6 text-md">
        <p><b>{data?.public_repos}</b> Repositories</p>
        <p><b>{data?.followers}</b> Followers</p>
        <p><b>{data?.following}</b> Following</p>
      </div>
      <Separator className="mt-6 mb-4" />
      <p className="text-muted-foreground hidden lg:block">©Copyright Lương Khoa</p>
    </div>
  );
}
