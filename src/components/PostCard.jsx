import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"

const PostCard = () => {
  return (
    <Card className="rounded-2xl shadow-sm border bg-white overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">Sophia Martinez</p>
            <p className="text-xs text-muted-foreground">@sophia_lens</p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">Just now</span>
      </div>

      {/* Image */}
      <div className="w-full h-[400px] lg:h-[622px] bg-gray-200" />

      <CardContent className="px-4 py-3 space-y-3">
        
        {/* Action Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Heart className="w-5 h-5 cursor-pointer" />
            <MessageCircle className="w-5 h-5 cursor-pointer" />
            <Send className="w-5 h-5 cursor-pointer" />
          </div>
          <Bookmark className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Likes */}
        <p className="text-sm font-semibold">342 likes</p>

        {/* Caption */}
        <p className="text-sm">
          <span className="font-semibold">sophia_lens </span>
          Golden hour never disappoints. Finding peace in the quiet moments.
        </p>

        {/* View Comments */}
        <p className="text-sm text-muted-foreground cursor-pointer">
          View all 2 comments
        </p>

      </CardContent>
    </Card>
  )
}

export default PostCard