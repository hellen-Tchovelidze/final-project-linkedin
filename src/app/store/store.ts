

import { create } from 'zustand';

interface User {
  uid: string;
  email: string;
  isStudent: boolean;
  experience: string;
  position: string;
  employmentType: string;
}

interface Store {
  email: string;
  password: string;
  isStudent: boolean;
  experience: string;
  position: string;
  employmentType: string;
  error: string;
  firstName: string;
  lastName: string;
  user: User | null;  
  
 
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setIsStudent: (value: boolean) => void;
  setExperience: (value: string) => void;
  setPosition: (value: string) => void;
  setEmploymentType: (value: string) => void;
  setError: (message: string) => void;
  clearError: () => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setUser: (user: User | null) => void;  
}


interface Store {
  email: string;
  password: string;
  isStudent: boolean;
  experience: string;
  position: string;
  employmentType: string;
  error: string;
  firstName: string;
  lastName: string;
  user: {  uid: string; 
    email: string; 
    isStudent: boolean; 
    experience: string; 
    position: string; 
    employmentType: string;} | null;  


  setEmail: (email: string) => void;
  setPassword: (password: string) => void;

  
  setIsStudent: (value: boolean) => void;
  setExperience: (value: string) => void;
  setPosition: (value: string) => void;
  setEmploymentType: (value: string) => void;

 
  setError: (message: string) => void;
  clearError: () => void;

 
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  
  setUser: (user: { 
    uid: string; 
    email: string; 
    isStudent: boolean; 
    experience: string; 
    position: string; 
    employmentType: string; 
  } | null) => void;  
  
}



export const useStore = create<Store>((set) => ({
  email: '',
  password: '',
  isStudent: false,
  experience: '',
  position: '',
  employmentType: '',
  error: '',
  firstName: '',
  lastName: '',
  user: null,  

  setEmail: (email) => set(() => ({ email })),
  setPassword: (password) => set(() => ({ password })),
  
  setIsStudent: (value) => set({ isStudent: value }),
  setExperience: (value) => set({ experience: value }),
  setPosition: (value) => set({ position: value }),
  setEmploymentType: (value) => set({ employmentType: value }),

  setError: (message) => set({ error: message }),
  clearError: () => set({ error: '' }),

  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),

  setUser: (user) => set({ user }),  
  
}));


interface AuthState {
  email: string;
  password: string;
  error: string | null;
  showForm: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setError: (error: string | null) => void;
  setShowForm: (show: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  password: "",
  error: null,
  showForm: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setError: (error) => set({ error }),
  setShowForm: (show) => set({ showForm: show }),
}));
