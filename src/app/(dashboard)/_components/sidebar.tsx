import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
    SidebarGroupAction,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { PlusIcon, User2Icon } from "lucide-react";
import { api } from "../../../../convex/_generated/api";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardSidebar() {
    const user = useQuery(api.functions.user.get);

      if (!user) {
        return null;
      }

    return (
       <Sidebar>
         <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="/friends">
                                  <User2Icon />
                                  Friends
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Direct Messages</SidebarGroupLabel>
                     
                </SidebarGroup>
            </SidebarGroup>
         </SidebarContent>
         <SidebarFooter>
            <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuButton className="flex items-center">
                            <Avatar className="size-6">
                              <AvatarImage src={user.image}/>
                              <AvatarFallback>{user.username[0]}</AvatarFallback>
                            </Avatar>
                            <p className="font-medium">{user.username}</p>
                          </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem asChild>
                            <SignOutButton />
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
         </SidebarFooter>
       </Sidebar>
    )
}