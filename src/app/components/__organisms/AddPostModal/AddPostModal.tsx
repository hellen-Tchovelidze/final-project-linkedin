
"use client";
import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from 'next/image';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../../../firebase/firebase-config";

type Props = {
  onClose: () => void;
};

export default function AddPostModal({ onClose }: Props) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePost = async () => {
    if (!image || !caption || !user) return alert("Fill all fields");
    setLoading(true);

    try {
      const compressed = await imageCompression(image, {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      });

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;


        const userDoc = await getDoc(doc(db, "users", user.uid));
        let username = "User";

        console.log("UserDoc data: ", userDoc.data());

        if (userDoc.exists()) {
          const data = userDoc.data();

          username = data.username || `${data.firstName} ${data.lastName}` || "User";
          console.log("Fetched username: ", username);
        } else {
          console.log("User document not found, defaulting to 'User'");
        }


        await addDoc(collection(db, "posts"), {
          caption,
          imageURL: base64,
          uid: user.uid,
          username,
          createdAt: serverTimestamp(),
        });

        setLoading(false);
        onClose();
      };

      reader.readAsDataURL(compressed);
    } catch (err) {
      console.error("Post upload failed", err);
      alert("Failed to post");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-transparent/60 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-[700px] max-h-[500px] h-full text-black relative flex justify-evenly items-start flex-col  ">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ❌
        </button>
        <h2 className="text-lg font-semibold mb-4">Create New Post</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 text-sm"
        />

        {preview && (
          <Image
            src={preview}
            alt="Preview"
            width={800}
            height={400}
            className="w-full mb-4 rounded-md max-h-[200px]  object-contain"
            unoptimized
          />
        )}

        <textarea
          placeholder="Write a caption..."
          className="w-full bg-slate-100 text-sm p-2 rounded mb-4"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <button
          onClick={handlePost}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full disabled:opacity-50"
        >
          {loading ? "Sharing..." : "Share"}
        </button>
      </div>
    </div>
  );
}
