"use client";

import * as React from "react";
import {
  Command,
  // FileQuestion,
  LayoutDashboard,
  MapPinned,
  MessagesSquare,
  Package2,
  // Settings,
  // Users,
  // Youtube,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import LogoutButton from "./logout-button";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Paket Travel",
      url: "/admin/paket-travel",
      icon: Package2,
    },
    // {
    //   title: "Youtube",
    //   url: "/admin/youtube",
    //   icon: Youtube,
    // },
    // {
    //   title: "Quiz",
    //   url: "/admin/quiz",
    //   icon: FileQuestion,
    // },
    {
      title: "Destinasi",
      url: "/admin/destinasi",
      icon: MapPinned,
    },
    {
      title: "Review",
      url: "/admin/review",
      icon: MessagesSquare,
    },
    // {
    //   title: "Pengguna",
    //   url: "/admin/pengguna",
    //   icon: Users,
    // },
    // {
    //   title: "Pengaturan",
    //   url: "/admin/pengaturan",
    //   icon: Settings,
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
