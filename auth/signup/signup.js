import {
    auth,
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "../../utils/utils.js";

const signin_form = document.getElementById("signin_form");
const submit_btn = document.getElementById("submit_btn");

signin_form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("e=>", e);

    const image = e.target[0].files[0];
    const email = e.target[1].value;
    const password = e.target[2].value;
    const firstNmae = e.target[4].value;
    const lastName = e.target[5].value;
    const contact = e.target[6].value;
    const company = e.target[7].value;

    const userInfo = {
        image,
        email,
        password,
        firstNmae,
        lastName,
        contact,
        company,
    };

    console.log("userInfo=>", userInfo);

    submit_btn.disabled = true;
    submit_btn.innerText = "Signning Up...";

    createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log("user=>", user);
            console.log("uid=>", user.user.uid);

            const userRef = ref(storage, `user/${user.user.uid}`);

            uploadBytes(userRef, image).then(() => {
                console.log('Uploaded a blob or file!');

                getDownloadURL(userRef).then((url) => {

                    console.log("url=>", url);

                    userInfo.image = url;

                    const userDbRef = doc(db, "users", user.user.uid);

                    setDoc(userDbRef, userInfo).then(() => {
                        console.log("user added into db");

                        window.location.href = "/";

                        submit_btn.disabled = false;
                        submit_btn.innerText = "Submit";

                    })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            alert("Error=>", errorMessage);
                            submit_btn.disabled = false;
                            submit_btn.innerText = "Submit";
                        });

                })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert("Error=>", errorMessage);
                        submit_btn.disabled = false;
                        submit_btn.innerText = "Submit";
                    });

            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Error=>", errorMessage);
                    submit_btn.disabled = false;
                    submit_btn.innerText = "Submit";
                });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error=>", errorMessage);
            submit_btn.disabled = false;
            submit_btn.innerText = "Submit";
        });
});