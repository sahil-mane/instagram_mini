import apiClient from "@/utils/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

export const fetchFeed = async ({ pageParam = null }) => {
  const res = await apiClient.get("/api/feed", {
    params: {
      cursor: pageParam,
      limit: 5,
    },
  });

  return res;
};

export const useFeed = () => {
  return useInfiniteQuery({
    queryKey: ["feed"],
    queryFn: fetchFeed,

    getNextPageParam: (lastPage) => {
      return lastPage?.nextCursor ?? undefined;
    },
  });
};
