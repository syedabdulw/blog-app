import { 
    auth,
    storage,
    db,
    onAuthStateChanged,
    doc,
    getDoc,
    signOut,
 } from "./utils/utils.js";

 const logout_btn = document.getElementById("logout_btn");
 const user_img = document.getElementById("user_img");

 console.log("auth=>",auth);
 console.log("storage=>",storage);
 console.log("db=>",db);
 
 onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      getUserInfo(uid);
      
    } else {
        console.log("No user is signed in");
        window.location.href = "./auth/login/login.html"
    }
  });

  logout_btn.addEventListener('click' , ()=>{
    signOut(auth);
  });

  function getUserInfo(uid) {

    const userRef = doc(db, "users", uid);

    getDoc(userRef).then((data) => {
        console.log(data.id);
        console.log(data.data());

        user_img.src = data.data().image;

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
};
