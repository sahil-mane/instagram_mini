import React, { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ExploreDetailPage = ({ open, setOpen, selectedImage }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  const content = (
    <div className="flex flex-col lg:flex-row lg:h-full">

      {/* LEFT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center bg-black">
        <img
          src={selectedImage?.url}
          alt=""
          className="w-full max-h-[60vh] object-contain"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between bg-white">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            {selectedImage?.title}
          </h2>
          <p className="text-muted-foreground text-sm">
            Community shared inspiration
          </p>
        </div>

        <div className="flex gap-4 mt-6">
          <Button className="flex-1">Like</Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
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
          forceMount
          className="!max-w-none w-[90vw] max-w-[1200px] h-[85vh] p-0 bg-transparent border-none shadow-none"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full w-full bg-white rounded-lg overflow-hidden"
              >
                {content}
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    );
  }

  // 📱 Mobile → Bottom Drawer
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        forceMount
        side="bottom"
        className="h-[85vh] p-0 bg-transparent border-none shadow-none"
      >
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key="sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="h-full bg-white rounded-t-2xl overflow-hidden"
            >
              <div className="h-full overflow-y-auto overscroll-none">
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
};

export default ExploreDetailPage;