import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  // create a user
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = { signUpUser, googleSignin };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
