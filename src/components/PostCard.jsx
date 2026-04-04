import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { useNavigate } from "react-router-dom"

const PostCard = ({ index, post }) => {
  const navigate = useNavigate()

  function getDateDiff(dateString) {
  const givenDate = new Date(dateString);
  const currentDate = new Date();

  const diffMs = currentDate - givenDate;

  if (diffMs < 0) {
    return "Future date hai";
  }

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
}

  function getReadableDiff(dateString) {
  const { days, hours, minutes } = getDateDiff(dateString);

  if (days > 0) return `${days} day(s) ago`;
  if (hours > 0) return `${hours} hour(s) ago`;
  if (minutes > 0) return `${minutes} minute(s) ago`;
  return "Just now";
}

  return (
    <Card
      onClick={(e) => {
        e.stopPropagation();
        navigate(`home/${index}`)
      }}
      className="rounded-2xl shadow-sm border bg-white overflow-hidden"
    >

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post?.user?.profilePic} />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{post?.user?.username}</p>
            <p className="text-xs text-muted-foreground">@{post?.user?.username}</p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{getReadableDiff(post?.createdAt)}</span>
      </div>

      {/* Image */}
      <div className="w-full h-[400px] lg:h-[622px] bg-black" >
        <img src={post?.imageUrl} style={{ height: "100%", width: "100%", objectFit: "contain" }} alt="posts" srcset="" />
      </div>

      <CardContent className="px-4 py-3 space-y-3">

        {/* Action Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div style={{ display:"flex",alignItems:"center",gap:"3px"}}>
              <Heart className="w-5 h-5 cursor-pointer" />
              {!(post?.likesCount > 1) &&
                <span style={{ color: "gray", width: "fit-content", fontSize: "12px", fontWeight: 500, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%" }}>{post?.likesCount || "12+"}</span>
              }
            </div>
            <div style={{ position: "relative",display:"flex" }}>
              <MessageCircle className="w-5 h-5 cursor-pointer" />
              {(post?.commentsCount > 1) &&
                <span style={{ position: "absolute", bottom: "-10px", right: "-10px", backgroundColor: "#fb2c36", color: "white", height: "16px", width: "fit-content", fontSize: "12px", fontWeight: 500, padding: "3px 6px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%" }}>{post?.commentsCount || "12+"}</span>
              }
            </div>
              <Send className="w-5 h-5 cursor-pointer flex" />
          </div>
          <Bookmark className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Likes */}
        <p className="text-sm font-semibold">342 likes</p>

        {/* Caption */}
        <p className="text-sm ">
          <span className="font-semibold">{post?.user?.username}</span>{" "}
          {post?.caption}
        </p>

        {/* View Comments */}
        <p className="text-sm text-muted-foreground cursor-pointer">
          View all {post?.commentsCount} comments
        </p>

      </CardContent>
    </Card>
  )
}

export default PostCard