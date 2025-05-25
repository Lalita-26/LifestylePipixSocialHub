import { Heart, MessageCircle, Share } from "lucide-react";

const mockUsersFeed = [
  {
    id: 1,
    name: "Luna Catlover",
    profile: "https://i.pravatar.cc/100?img=12",
    captions: "My kitty just learned how to open the fridge 😹",
    image: "https://placekitten.com/400/300",
    comments: [
      {
        id: 1,
        user: "MeowMeow87",
        text: "That’s so cute! 😻",
        time: "1 min ago",
      },
      {
        id: 2,
        user: "PurrfectMom",
        text: "Haha mine does the same with cabinets 😂",
        time: "5 min ago",
      },
    ],
  },
  {
    id: 2,
    name: "Tommy Tail",
    profile: "https://i.pravatar.cc/100?img=34",
    captions: "Adopted this little guy today 💕 #rescuecat",
    image: "https://placekitten.com/401/301",
    comments: [
      {
        id: 1,
        user: "WhiskersQueen",
        text: "Aww congrats!! He’s adorable 💕",
        time: "2 min ago",
      },
    ],
  },
];

export default function FeedWithComments() {
  return (
    <div className="col-span-12 md:col-span-6 space-y-6">
      {mockUsersFeed.map((users) => (
        <div
          key={users.id}
          className="bg-white p-4 rounded-2xl shadow space-y-3 text-sm sm:text-base"
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <img
              src={users.profile}
              className="w-10 h-10 rounded-full ring-2 ring-yellow-200"
              alt="profile"
            />
            <div>
              <p className="font-bold text-pink-600">{users.name}</p>
              <p className="text-sm text-gray-400">2 min ago</p>
            </div>
          </div>

          {/* Caption */}
          <p>{users.captions}</p>

          {/* Image */}
          <img
            src={users.image}
            className="rounded-xl max-h-80 object-cover w-full"
            alt="post"
          />

          {/* Action Icons */}
          <div className="flex text-pink-400 text-sm mt-2 space-x-4">
            <Heart className="hover:text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
            <MessageCircle className="hover:text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
            <Share className="hover:text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Comments */}
          <div className="mt-4 space-y-2">
            {users.comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start gap-2 text-sm text-gray-800"
              >
                <div className="bg-pink-50 p-2 rounded-xl w-full">
                  <p className="font-semibold text-pink-500">{comment.user}</p>
                  <p>{comment.text}</p>
                  <p className="text-xs text-gray-400 mt-1">{comment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
