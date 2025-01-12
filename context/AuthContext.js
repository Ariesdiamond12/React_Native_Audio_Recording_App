// import { createContext, useContext, useState, useEffect } from "react";
// import { supabase } from "../services/SupabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [session, setSession] = useState(null);

//   // Listen for authentication state changes
//   useEffect(() => {
//     // Get the initial session
//     const getSession = async () => {
//       const { data } = await supabase.auth.getSession();
//       setSession(data.session);
//     };

//     getSession();

//     // Subscribe to auth state changes
//     const { data: subscription } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         console.log(`Auth Event: ${event}`); // Log auth events for debugging
//         setSession(session);
//       }
//     );

//     // Cleanup the subscription on unmount
//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []); // Empty dependency array ensures it only runs on mount/unmount

//   // Sign Up Function
//   const signUpNewUser = async (username, email, password) => {
//     try {
//       // Step 1: Create a new user with Supabase auth
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         console.error("Signup Error:", error.message);
//         return { success: false, message: error.message };
//       }

//       // Step 2: Insert the user into the profiles table
//       const userId = data.user.id; // Get the user's unique ID
//       const { error: profileError } = await supabase
//         .from("profiles")
//         .insert([{ user_id: userId, username }]);

//       if (profileError) {
//         console.error("Profile Creation Error:", profileError.message);
//         return { success: false, message: profileError.message };
//       }

//       return { success: true, message: "User created successfully!" };
//     } catch (err) {
//       console.error("Unexpected Error:", err);
//       return { success: false, message: "An unexpected error occurred." };
//     }
//   };

//   // Sign Out Function
//   const signOut = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) {
//       console.error("Sign Out Error:", error.message);
//     }
//   };

//   // Sign In Function
// const signIn = async (email, password) => {
//   try {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       console.error("Sign In Error:", error.message);
//       return { success: false, message: error.message };
//     }

//     return { success: true, message: "Sign-in successful!", session: data.session };
//   } catch (err) {
//     console.error("Unexpected Error:", err);
//     return { success: false, message: "An unexpected error occurred." };
//   }
// };


//   return (
//     <AuthContext.Provider value={{ session, signUpNewUser, signOut, signIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
