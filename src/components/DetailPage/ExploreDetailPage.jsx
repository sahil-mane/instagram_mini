import React, { useState, useEffect, useSyncExternalStore } from "react";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { motion, AnimatePresence } from "framer-motion";

import ProfilePic from "../../assets/profile_pic.jpg";
import CustomTooltip from "../CustomTooltip";

import LikeIcon from "../../assets/Like_icon.svg?react";
import CommentIcon from "../../assets/Comment_icon.svg?react";
import MessageIcon from "../../assets/Message_icon.svg?react";
import SaveIcon from "../../assets/ActiveSave.svg?react";


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

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      setImageLoaded(false);
    }
  }, [open]);

  if (!selectedImage) return null;

  const content = (
    <div className="flex flex-col lg:flex-row lg:h-full p-4">

      {/* LEFT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-black rounded-lg relative">

        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-lg"></div>
        )}

        <img
          src={selectedImage?.url}
          alt=""
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          className={`w-full lg:h-full object-contain transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 lg:px-8 flex flex-col bg-white">

        {/* USER */}
        <div className="flex justify-between items-center border-b border-gray-300">
          <div className="flex gap-4 items-center py-3">
            <img
              src={ProfilePic}
              alt="user"
              className="h-12 w-12 rounded-full"
            />
            <p className="text-[16px] font-medium">User Name</p>
          </div>
          <p className="text-xl cursor-pointer">...</p>
        </div>

        {/* COMMENTS */}
        <div className="min-h-[200px] lg:flex-1"></div>

        {/* ACTIONS */}
        <div className="border-t border-[#E2E8F0] mt-6">

          <div className="flex justify-between py-3 mb-2">

            <div className="flex gap-4">

              <CustomTooltip title="Like">
                <span className="flex cursor-pointer">
                  <LikeIcon />
                </span>
              </CustomTooltip>

              <CustomTooltip title="Comment">
                <span className="flex cursor-pointer">
                  <CommentIcon />
                </span>
              </CustomTooltip>

              <CustomTooltip title="Direct">
                <span className="flex cursor-pointer">
                  <MessageIcon />
                </span>
              </CustomTooltip>

            </div>

            <CustomTooltip title="Save">
              <span className="flex cursor-pointer">
                <SaveIcon />
              </span>
            </CustomTooltip>

          </div>

          <p className="text-sm font-medium">324 likes</p>

        </div>

        {/* COMMENT INPUT */}
        <div className="flex items-center lg:p-3 gap-3 pt-6">
          <input
            className="flex-1 focus:outline-none bg-[#F8FAFC] h-[48px] rounded-lg px-4"
            type="text"
            placeholder="Add a comment..."
          />
          <p className="cursor-pointer font-medium">Post</p>
        </div>

      </div>

    </div>
  );

  /* =========================
        DESKTOP MODAL
  ========================= */

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="!max-w-none w-[90vw] max-w-[1200px] h-[85vh] p-0 bg-transparent border-none shadow-none"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.35 }}
                className="h-full w-full bg-white rounded-xl overflow-hidden"
              >
                {content}
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    );
  }

  /* =========================
        MOBILE DRAWER
  ========================= */

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="bottom"
        className="h-[85vh] p-0 bg-transparent border-none shadow-none"
      >
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="h-full bg-white rounded-t-2xl overflow-hidden"
        >
          <div className="h-full overflow-y-auto">
            {content}
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default ExploreDetailPage;
