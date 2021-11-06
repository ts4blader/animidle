// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCYlAY2UCQednkPqLoXGW3sxWCMvJ3g-EQ",
  authDomain: "animidle.firebaseapp.com",
  projectId: "animidle",
  storageBucket: "animidle.appspot.com",
  messagingSenderId: "1067083639289",
  appId: "1:1067083639289:web:04ba5f3e2f26691d513528",
  measurementId: "G-8TT7Y30YCM",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);

// Auth Hepler

export const ERROR_CODE = {
  INVALID_EMAIL: "auth/invalid-email",
  WRONG_PASSWORD: "auth/wrong-password",
  EMAIL_ALREADY_EXISTS: "auth/email-already-in-use",
};

const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();
const facebook = new FacebookAuthProvider();

export const authChange = (handleLogedIn, handleLogedOut) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      handleLogedIn(user);
    } else {
      handleLogedOut(user);
    }
  });
};

export const updateUser = (user, handleSuccess) => {
  updateProfile(user, {
    photoURL: "/icons/user-" + Math.floor(Math.random() * 5 + 1) + ".png",
  })
    .then(() => {
      handleSuccess();
      console.log("Profile updated!");
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log(error);
    });
};

export const signUp = (email, password, handleSuccess, handleError) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      handleSuccess(userCredential.user);
    })
    .catch((error) => {
      handleError(error.code);
    });
};

export const signIn = (email, password, handleSuccess, handleError) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      handleSuccess(userCredential.user);
    })
    .catch((error) => {
      handleError(error.code);
    });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("log out");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

export const signInGoogle = () => {
  signInWithPopup(auth, google)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const signInFacebook = () => {
  signInWithPopup(auth, facebook)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
};

export const signInGithub = () => {
  signInWithPopup(auth, github)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
};
