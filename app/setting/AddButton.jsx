"use client";
import { addBlog } from "@/actions";
import Tiptap from "@/components/TipTap";
import { Button } from "@/components/ui/button";
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
import { addFormSchema } from "@/schemas/addSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AddButton({updateData, list}) {
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(addFormSchema),
    defaultValues: {
      title: "",
      content: ``,
      description: "",
      link_github: "",
      link_download: "",
      progress: "",
      thumbnail: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    try {
      const { data, status } = await addBlog(values);
      toast({
        title: status,
        description: `Thêm bài viết id ${data[0]?.id} thành công `,
      });
      updateData(list.concat(data[0]))
      form.reset();
      document.getElementById("close").click()
    } catch (error) {
      toast({
        title: error.message,
        description: "Your message has been sent.",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Thêm dự án</Button>
      </DialogTrigger>
      <DialogContent className="w-full h-screen flex flex-col justify-between overflow-y-auto">
        <DialogHeader className=" w-full">
          <DialogTitle>Thêm bài viết mới?</DialogTitle>
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
        <DialogClose id="close"></DialogClose>
      </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
