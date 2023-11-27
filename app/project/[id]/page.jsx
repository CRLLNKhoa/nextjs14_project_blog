"use client";
import React, { useEffect, useState } from "react";
import Giscus from "@giscus/react";
import { getBlogWithId } from "@/actions";
import { Skeleton } from "@/components/ui/skeleton";
import dayjs from "@/lib/dayjs";
import { Separator } from "@/components/ui/separator";
import parse from "html-react-parser";
import { Button } from "@/components/ui/button";
import { IoMdCloudDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { useTheme } from "next-themes";

export default function Page({ params }) {
  const [data, setData] = useState();
  const [dataFL, setDataFL] = useState([]);
  const [link_github, setLink_Github] = useState("");
  const [validation, setValidation] = useState();
  const { theme } = useTheme()


  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('validation_github')
    setValidation((item))
  }, [])

  useEffect(() => {
    try {
      const getData = async () => {
        const result = await getBlogWithId(params.id);
        setData(result?.data[0]);
      };
      getData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    const getFL = async () => {
      await axios
        .get("https://api.github.com/users/CRLLNKhoa/followers")
        .then(function (response) {
          // handle success
          setDataFL(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    getFL();
  }, []);

  if (!data) {
    return (
      <div className="container pb-10 flex flex-col py-6 gap-6">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    );
  }

  return (
    <>
      <div className="container pb-10 flex flex-col gap-6 py-6">
        <h1 className="text-center font-bold text-xl">{data?.title}</h1>
        <Separator />
        <div className="flex justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <img
              className="w-8 h-8 rounded-full"
              alt="myImng"
              src="https://avatars.githubusercontent.com/u/107914230?v=4"
            />
            <p>Lương Khoa</p>
          </div>
          <p>{dayjs(data?.created_at).fromNow()}</p>
        </div>
        {parse(data?.content)}
        <Separator />
        <h1 className="font-bold text-lg">Link tải:</h1>
        {dataFL?.filter((item) => item.html_url === validation).length ===
          0 && (
          <div className="flex h-[140px] gap-4 justify-center items-center relative">
            <div className="absolute w-full h-full bg-black rounded-md">
              <div className="flex items-center justify-center flex-col gap-2 h-full">
                <FaLock className="text-red-600 w-6 h-6" />
                <a
                  className="text-white"
                  href="https://github.com/CRLLNKhoa"
                  target="_blank"
                >
                  Follow Github tôi để tải! Link tại đây!
                </a>
                <div className="flex gap-4 items-center">
                  <input
                    onChange={(e) => setLink_Github(e.target.value)}
                    className="h-[36px] outline-none px-4 rounded-sm"
                    placeholder="Nhập link Github của bạn..."
                    type="text"
                  />
                  <Button
                    onClick={() => {
                      localStorage.setItem("validation_github", link_github);
                      location.reload();
                    }}
                  >
                    Xác nhận
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {dataFL?.filter((item) => item.html_url === validation).length ===
          1 && (
          <div className="flex gap-4">
            <Button
              asChild
              className="rounded-sm"
            >
              <Link
                href={data?.link_github}
                target="_blank"
                className="dark:text-white"
              >
                <FaGithub className="w-6 h-6 mr-2" /> Mã nguồn
              </Link>
            </Button>

            <Button
              variant="outline"
              className="rounded-sm"
              asChild
            >
              <Link
                href={data?.link_download}
                target="_blank"
                className="text-black dark:text-white"
              >
                <IoMdCloudDownload className="w-6 h-6 mr-2" /> Tải mã nguồn
              </Link>
            </Button>
          </div>
        )}
        <Separator />
        <Giscus
          id="comments"
          repo="CRLLNKhoa/nextjs14_project_blog"
          repoId="R_kgDOKvrPPA"
          category="Announcements"
          categoryId="DIC_kwDOKvrPPM4CbHeD"
          mapping="pathname"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme}
          lang="vi"
          loading="lazy"
        />
      </div>
    </>
  );
}
