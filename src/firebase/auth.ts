




export const signUp = async (email: string, password: string) => {
  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
  } catch (error) {
      console.error("Login error:", error);
      throw error;
  }
};



import { auth, db } from './firebase-config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, updateProfile, User } from 'firebase/auth';
import { doc, setDoc, serverTimestamp, getDoc, collection, query, where, getDocs } from 'firebase/firestore';


export const registerWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

   
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      email: user.email,
      createdAt: serverTimestamp(),
      firstName: '',  
      lastName: '',   
    });

    return user;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; 
  }
};


export const signInWithGoogle = async (): Promise<User | null> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

  
    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      await setDoc(userRef, {
        email: user.email,
        createdAt: serverTimestamp(),
        firstName: '',  
        lastName: '',   
      });
    }

    return user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    return null;
  }
};


export const signOutFromGoogle = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User signed out from Google");
  } catch (error) {
    console.error("Google sign-out error:", error);
  }
};


export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};


export const updateUserProfile = async (displayName: string, photoURL: string): Promise<void> => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, { displayName, photoURL });
      console.log("User profile updated:", { displayName, photoURL });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }
};


export const updateUserLocation = async (location: string) => {
  const user = auth.currentUser; 
  
  if (user) {
   
    const userRef = doc(db, 'users', user.uid);
    
   
    await setDoc(userRef, { location }, { merge: true });
  } else {
    throw new Error("No user is logged in");
  }
};



import {  addDoc  } from 'firebase/firestore';






import { getFirestore, updateDoc, arrayUnion } from "firebase/firestore";



export const sendFriendRequest = async (targetUserId: string) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not authenticated");
  }

  const userRef = doc(db, "users", user.uid);
  const targetUserRef = doc(db, "users", targetUserId);

  try {
  
    const targetUserSnapshot = await getDoc(targetUserRef);
    if (!targetUserSnapshot.exists()) {
      throw new Error("Target user does not exist");
    }

  
    const userSnapshot = await getDoc(userRef);
    const userData = userSnapshot.data();
    const friends = userData?.friends || []; 

   
    if (friends.indexOf(targetUserId) !== -1) {
      throw new Error("Friend request already sent or already friends");
    }

    await updateDoc(userRef, {
      friends: arrayUnion(targetUserId),
    });

   
    await setDoc(doc(db, "friendRequests", `${user.uid}_${targetUserId}`), {
      from: user.uid,
      to: targetUserId,
      status: "pending",
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Error in sendFriendRequest:", error);
    throw error;
  }
};






export const registerUser = async (
  email: string,
  password: string,
  fullName: string,
  username: string
) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  const user = result.user;

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email,
    fullName,
    username,
    photoURL: "",
    postsCount: 0,
    followers: [],
    following: [],
  });
};

export const loginUser = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};



const addPost = async (content:any) => {
  const user = auth.currentUser;  
  
  if (!user) {
    console.log("Error: User is not authenticated");
    return;
  }
  
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      userId: user.uid,   
      content: content,    
      timestamp: new Date(),
    });
    console.log("Post added with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};







export const getUsersByName = async (name: string) => {
  try {
    const usersRef = collection(db, 'users'); 
    const q = query(
      usersRef,
      where('firstName', '>=', name),
      where('firstName', '<=', name + '\uf8ff')
    );  

    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map(doc => ({ ...doc.data(), uid: doc.id }));

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);  
    throw new Error('Error fetching users by name');
  }
};
