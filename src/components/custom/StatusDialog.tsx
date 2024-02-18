import React, { useState } from "react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "../ui/use-toast";

interface InputObj { oid: string, productName: string, quantity: number, address: string, status: string, amount: number }
export const StatusDialog = ({ order }: { order: InputObj }) => {

  // get setOrder function to update the order status in this component 

  const { toast } = useToast();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [status, setStatus] = useState(order.status);

  const submitHandler = () => {
    toast({ title: "Success", description: `status updated to ${status} of order id ${order.oid}`, variant: "success", duration: 3000 })
    setIsDialogOpen(false);
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Badge
          variant="outline"
          className={
            order.status === "New"
              ? "bg-teal-300"
              : order.status === "Dispatched"
                ? "bg-gray-300"
                : "bg-green-300"
          }
        >
          {order.status}
        </Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Order : {order.oid}</DialogTitle>
          <DialogDescription>
            Update status of the order. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex justify-center items-center gap-5">
            <Select onValueChange={(e) => setStatus(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={order.status} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="dispatched">Dispatched</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Username
                </Label>
                <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                />
            </div> */}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitHandler}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
