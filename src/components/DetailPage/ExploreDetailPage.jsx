import React, { useEffect, useState } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

const ExploreDetailPage = ({ open, setOpen, selectedImage }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  const content = (
    <div className="flex flex-col lg:flex-row h-full">

      {/* LEFT IMAGE */}
      <div className=" w-full lg:w-1/2 flex  justify-center bg-black">
        <img
          src={selectedImage.url}
          alt=""
          className="h-full object-contain"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 p-8 flex flex-col justify-between">
        <div>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedImage.title}
            </DialogTitle>
            <DialogDescription>
              Community shared inspiration
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="flex gap-4">
          <Button className="flex-1">Like</Button>

          <DialogClose asChild>
            <Button variant="outline" className="flex-1">
              Close
            </Button>
          </DialogClose>
        </div>
      </div>

    </div>
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (!selectedImage) return null;

  // 💻 Desktop → Center Grow Modal
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="
  !max-w-none
  w-[90vw]
  max-w-[1200px]
  h-[85vh]
  p-0
  rounded-lg
  overflow-hidden
  transition-all
  duration-300
  ease-out
  data-[state=open]:scale-100
  data-[state=closed]:scale-95
  data-[state=open]:opacity-100
  data-[state=closed]:opacity-0
"
        >
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  // 📱 Mobile → Bottom Drawer
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="max-h-[85vh] overflow-y-auto [&>div:first-child]:hidden">
        {content}
      </DrawerContent>
    </Drawer>
  );
};

export default ExploreDetailPage;