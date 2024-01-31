import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const creatUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const info = {
    user,
    creatUser,
    loader,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
