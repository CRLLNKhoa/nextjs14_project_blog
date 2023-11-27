/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteBlog, getBlog } from "@/actions";
import { Button } from "@/components/ui/button";
import { MdEditSquare, MdDelete } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Tiptap from "@/components/TipTap";
import { useForm } from "react-hook-form";
import { addFormSchema } from "@/schemas/addSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Tables({ data, updateData }) {
  const { toast } = useToast();
  const [itemEdit, setItemEdit] = useState(data[0]);
    // 1. Define your form.
    const form = useForm({
      resolver: zodResolver(addFormSchema),
      defaultValues: {
        title: itemEdit?.title,
        content: itemEdit?.content,
        description: itemEdit?.description,
        link_github: itemEdit?.link_github,
        link_download: itemEdit?.link_download,
        progress: itemEdit?.progress,
        thumbnail: itemEdit?.thumbnail,
      },
    });

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  async function deleteAction(id) {
    try {
      await deleteBlog(id);
      toast({
        title: "Thành công!",
        description: `Thêm bài viết thành công !`,
      });
      updateData(data.filter((item) => item.id !== id));
    } catch (e) {
      console.log("Error!", e);
    }
  }

  // 2. Define a submit handler.
  async function onSubmit(values) {
    // try {
    //   const { data, status } = await addBlog(values);
    //   toast({
    //     title: status,
    //     description: `Thêm bài viết id ${data[0]?.id} thành công `,
    //   });
    //   updateData(list.concat(data[0]))
    //   form.reset();
    //   document.getElementById("close").click()
    // } catch (error) {
    //   toast({
    //     title: error.message,
    //     description: "Your message has been sent.",
    //   });
    // }
  }

  return (
    <Table>
      <TableCaption>Danh sách bài viết</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">STT</TableHead>
          <TableHead>Tên dự án</TableHead>
          <TableHead className="w-[100px]">Lượt xem</TableHead>
          <TableHead className="w-[100px]">Lượt thích</TableHead>
          <TableHead className="w-[100px]">Lượt tải</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.view}</TableCell>
            <TableCell>{item.like}</TableCell>
            <TableCell>{item.count_download}</TableCell>
            <TableCell className="flex gap-2 justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="bg-orange-500 hover:bg-orange-700 duration-500"
                    size="icon"
                  >
                    <MdEditSquare />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full h-screen flex flex-col justify-between overflow-y-auto">
                  <DialogHeader className=" w-full">
                    <DialogTitle>Chỉnh sửa bài viết bài viết:</DialogTitle>
                  </DialogHeader>
                  <div className="w-full flex flex-col gap-4 ">
                    <Form {...form}>
                      <form
                        id="formname"
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                      >
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tiêu đề</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Tên bài viết...."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Giới thiệu</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Giới thiệu...."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="thumbnail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ảnh đại diện</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Url...."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nội dung</FormLabel>
                              <FormControl>
                                <Tiptap
                                  onChange={field.onChange}
                                  content={"Nhập vào đây...."}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="link_github"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Liên kết đến Github</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Liên kết đến Github...."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="link_download"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Liên kết đến download</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Liên kết đến download...."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="progress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tiến độ hoàn thành</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Tiến độ...."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="w-full gap-4 flex justify-end">
                          <Button
                            className="ml-auto"
                            type="submit"
                            form="formname"
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                  <DialogFooter>
                    <DialogClose id="closeEdit"></DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="bg-red-500 hover:bg-red-700 duration-500"
                    size="icon"
                  >
                    <MdDelete />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Bạn có chắc muốn xóa bài viết không?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Thao tác này không thể hoàn tác! Bài viết sẽ bị gở khỏi cơ
                      sở dữ liệu!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Trở lại</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteAction(item.id)}>
                      Xóa
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
