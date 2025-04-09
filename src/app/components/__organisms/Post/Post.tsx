"use client";



import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../../firebase/firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";


interface Post {
  id: string;
  caption: string;
  imageURL: string;
  uid: string;
  username: string;
}

interface Comment {
  id: string;
  text: string;
  username: string;
}

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const [user] = useAuthState(auth);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const img = localStorage.getItem(`profile-photo-${user?.uid}`);
    if (img) setProfileImage(img);
  }, [user?.uid]);

  useEffect(() => {
    const commentsRef = collection(db, "posts", post.id, "comments");
    const q = query(commentsRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Comment[];

      setComments(fetchedComments);
    });

    return () => unsubscribe();
  }, [post.id]);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleSave = () => setSaved((prev) => !prev);

  const handleComment = async () => {
    if (!commentInput.trim() || !user) return;

    try {
      await addDoc(collection(db, "posts", post.id, "comments"), {
        text: commentInput,
        uid: user.uid,
        username: user.displayName || "user",
        createdAt: serverTimestamp(),
      });
      setCommentInput("");
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "posts", post.id));
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete post", error);
      alert("Failed to delete post.");
    }
  };

  return (
    <div className="bg-white rounded-lg mb-8 w-full max-w-md mx-auto overflow-hidden  border text-black ">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src={profileImage || "/avatar.png"}
            alt="Profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            unoptimized
          />
          <p className="text-xs text-black">@{post.username}</p>
        </div>
        {user?.uid === post.uid && (
          <button onClick={handleDelete}  className="transform hover:scale-110 transition-transform duration-300">
            ❌
          </button>
        )}
      </div>

      <Image
        src={post.imageURL}
        alt={post.caption}
        width={800}
        height={600}
        className="w-full max-h-[600px] object-cover"
        unoptimized
      />

      <div className="flex gap-4 px-4 py-2">
        <button onClick={handleLike} className="transform hover:scale-150 transition-transform duration-300">
          👍Like
        </button>
        <button onClick={() => setVisible(true)}  className="transform hover:scale-110 transition-transform duration-300">
          💬comment
        </button>
        <button onClick={handleSave} className="ml-auto">
          📎save
        </button>
      </div>

      <div className="px-4 pb-3 text-sm">
        {likes > 0 && (
          <p className="font-semibold mb-1">
            {likes} like{likes > 1 ? "s" : ""}
          </p>
        )}
        <p>{post.caption}</p>

        {comments.length > 0 && (
          <div className="mt-2">
            {comments.map((comment) => (
              <p key={comment.id} className="text-sm  text-black">
                <span className="font-semibold mr-1">@{post.username}:</span>
                {comment.text}
              </p>
            ))}
          </div>
        )}

        {visible && (
          <div className="mt-2 flex items-center gap-2">
            <input
              className=" rounded px-2 py-1 w-full text-black text-sm"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Add a comment..."
            />
            <button
              onClick={handleComment}
              className="text-sm text-blue-500 hover:underline"
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}



