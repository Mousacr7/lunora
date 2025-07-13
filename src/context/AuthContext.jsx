import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Loader from "../component/Loader";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
const [loading, setLoading] = useState(true); // ✅ loading starts as true

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false); // ✅ done loading
      });

      return () => unsubscribe();
    }, []);

    return (
      <AuthContext.Provider value={{ currentUser, loading }}>
        {loading ? <Loader /> : children}
      </AuthContext.Provider>
    );


};

export const useAuth = () => useContext(AuthContext);
