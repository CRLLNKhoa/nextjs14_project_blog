import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Followers from "./tabs/Followers";
import Following from "./tabs/Following";
import Forked from "./tabs/Forked";
import Reponsitoreis from "./tabs/Reponsitoreis";
import Events from "./tabs/Events";
import Blogs from "./tabs/Blogs";

export default function Content() {
  return (
    <div className="lg:col-span-3 col-span-4 lg:pl-6 lg:mt-0 flex flex-col">
      <Tabs
        defaultValue="blog"
        className="w-full"
      >
        <TabsList className="flex w-full bg-transparent flex-wrap md:flex-nowrap lg:flex-nowrap justify-between mb-12 lg:mb-0">
          <TabsTrigger
            className="w-1/3 focus:bg-black"
            value="blog"
          >
            Projects Blog
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3"
            value="repositories"
          >
            Repositories
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3"
            value="forked"
          >
            Forked
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3"
            value="followers"
          >
            Followers
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3"
            value="following"
          >
            Following
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3"
            value="events"
          >
            Events
          </TabsTrigger>
        </TabsList>
        <TabsContent
          id="tour-example"
          value="blog"
        >
          <Blogs />
        </TabsContent>
        <TabsContent value="repositories">
          <Reponsitoreis />
        </TabsContent>
        <TabsContent value="forked">
          <Forked />
        </TabsContent>
        <TabsContent value="followers">
          <Followers />
        </TabsContent>
        <TabsContent value="following">
          <Following />
        </TabsContent>
        <TabsContent value="events">
          <Events />
        </TabsContent>
      </Tabs>
    </div>
  );
}
