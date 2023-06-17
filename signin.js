//Get the signIn button by ID and assign it to a variable signIn in your signin.js file.
let signIn = document.getElementById('signIn')

//Change the initially empty text of the button to Sign In.
signIn.innerHTML = "sign in"

//Add an event listener to the button with a click event and a function that has the event parameter passed into it.
signIn.addEventListener('click',(event) => {
    //Prevent the default behavior of buttons using the event parameter just passed.
    event.preventDefault();

    //Get the inputs and their values from your index.html or whatever you named your signin page.
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Change the text of the signin button to Loading... and add the pulse class to the button.
    signIn.innerText = "Loading...";
    signIn.classList.add("pulse");

    // Check if the email and password are not empty strings and throw appropriate sweet alert, hhh
    if (
        email === ""  || password === "") {
        Swal.fire({
            icon: "info",
            text: "All fields are required",
            confirmButtonText: "ok",
        });
        // also at this point change the signin button text back to Sign In and remove the pulse class from the button.
        signIn.innerText = "Sign In";
        signIn.classList.remove("pulse");
    } else {
        const signInData = new FormData();
        signInData.append("email", email)
        signInData.append("password", password)

        const signReg = {
            method: "POST",
            body: signInData,
        };
        const URL = "https://pluralcodesandbox.com/yorubalearning/api/admin_login"

        //Use the fetch API and pass in the 2 parameters needed namely URL and signReq
        fetch(URL, signReg)
        //Get the response and call the json() method on it.
        .then((response) => response.json())
        .then((result) => {
            console.log(result, result.status)
            localStorage.setItem("adminObj",
            JSON.stringify(result));
    
            const getAdminObj = localStorage.getItem("adminObj");
    
            const adminObj = JSON.parse(getAdminObj);

            if(adminObj.hasOwnProperty("email")) {
                location.href = "dashboard.html";
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Login Unsuccessful",
                    text: "Invalid email or password"
                });
            }
            signIn.textContent = "sign in";
            signIn.classList.remove("pulse")
        })
        .catch((error) => {
            console.log("error",error);
        });
    }    
});