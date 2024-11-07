import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SidebarGroupAction } from "@/components/ui/sidebar";
import { PlusIcon } from "lucide-react";

export function NewDirectmessage() {
  return (
    <Dialog>
      <DialogTrigger>
        <SidebarGroupAction>
          <PlusIcon />
          <span className="sr-only">New Direct Message</span>
        </SidebarGroupAction>
      </DialogTrigger>
      <DialogContent></DialogContent>
    </Dialog>
  );
}
