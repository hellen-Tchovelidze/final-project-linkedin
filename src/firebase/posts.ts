

import { db, storage, auth } from "./firebase-config";
import { collection, addDoc, doc, updateDoc, arrayUnion, getDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export const uploadImage = async (file: File): Promise<string> => {
  try {
    
    if (!file.type.startsWith("image/")) {
      throw new Error("Only image files are allowed");
    }

    const storageRef = ref(storage, `posts/${file.name}-${Date.now()}`);
    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef); 
    return downloadUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload image");
  }
};


export const createPost = async (content: string, imageFile?: File) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadImage(imageFile); 
    }

    const postRef = await addDoc(collection(db, "posts"), {
      content,
      imageUrl,
      likes: 0,
      createdAt: new Date(),
      author: {
        uid: user.uid,
        name: user.displayName || "Anonymous",
        email: user.email,
      },
    });

    return postRef.id; 
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
};


export const toggleLike = async (postId: string) => {
  const postRef = doc(db, "posts", postId);
  const postSnap = await getDoc(postRef);

  if (postSnap.exists()) {
    const post = postSnap.data();
    const newLikes = (post.likes || 0) + 1; 
    await updateDoc(postRef, { likes: newLikes });
  }
};


export const addComment = async (postId: string, commentText: string) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      comments: arrayUnion({
        text: commentText,
        author: user.displayName || "Anonymous",
        createdAt: new Date(),
      }),
    });
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};


export const deletePost = async (postId: string) => {
  try {
    await deleteDoc(doc(db, "posts", postId));
    console.log(`Post ${postId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};




import {  setDoc, Timestamp } from 'firebase/firestore';


export const uploadPost = async (postText: string, userId: string) => {
  try {
    const postData = {
      authorId: userId,
      content: postText,
      createdAt: Timestamp.now(),
      likes: 0,
      comments: []
    };

    
    const postRef = doc(db, 'posts', `${userId}_${new Date().toISOString()}`);
    await setDoc(postRef, postData);

    console.log('Post uploaded successfully');
  } catch (error) {
    console.error('Error uploading post:', error);
  }
};



export const uploadFile = async (file: File) => {
  if (!file) return;
  
  const storageRef = ref(storage, 'uploads/' + file.name); 

  try {
   
    const snapshot = await uploadBytes(storageRef, file);
    console.log('Uploaded file:', snapshot);

    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('File available at:', downloadURL);

    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};
