import React, { useSyncExternalStore } from "react";

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
import ProfilePic from "../../assets/profile_pic.jpg"
import CustomTooltip from "../CustomTooltip";
import LikeIcon from "../../assets/Like_icon.svg?react"
import CommentIcon from "../../assets/Comment_icon.svg?react"
import MessageIcon from "../../assets/Message_icon.svg?react"
import SaveIcon from "../../assets/ActiveSave.svg?react"

function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

const ExploreDetailPage = ({ open, setOpen, selectedImage }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const content = (
    <div className="flex flex-col lg:flex-row lg:h-full p-4">

      {/* LEFT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center bg-black rounded-lg">
        <img
          src={selectedImage?.url}
          alt=""
          className="w-full lg:h-full object-contain"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 px-8 flex flex-col bg-white">
        <div className="flex justify-between items-center border-b-2 border-gray-300">
          <div className="flex gap-5 items-center jus py-3">
            <img src={ProfilePic} alt="tanish" className="h-12 w-12 rounded-full" />
            <p className="text-[16px]">User Name</p>
          </div>
          <p>...</p>
        </div>
        <div className="flex-1">

        </div>
        <div className='border-t-2 border-[#E2E8F0] mt-6'>
          <div className='flex justify-between  py-3 mb-4'>
            <div className='flex gap-4'>
              <CustomTooltip title={"Like"}>
                <span className='flex'><LikeIcon /></span>
              </CustomTooltip>
              <CustomTooltip title={"comment"}>
                <span className='flex'><CommentIcon /></span>
              </CustomTooltip>
              <CustomTooltip title={"direct"}>
                <span className='flex'><MessageIcon /></span>
              </CustomTooltip>
            </div>
            <CustomTooltip title={"Save"}>
              <span className='flex'><SaveIcon /></span>
            </CustomTooltip>
          </div>
          <p>324 likes</p>
        </div>
        <div className="flex items-center p-3 gap-3 pt-6">
          <input className="flex-1 focus:outline-none bg-[#F8FAFC] h-[48px] rounded-lg px-4" type="text" name="" id="" placeholder="Add a comment..." />
          <p className="cursor-pointer">Post</p>
        </div>

      </div>

    </div>
  );

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