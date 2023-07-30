// add hovered class to selected list item
let list = document.getElementsByClassName("#navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.getElementById ("navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


// STEP 1 - Create a function declaration.
function displayCardContents() {
  // STEP 2 - Get the pageModal and add a style of flex to it, remember that the style of the pageModal is none before now.
  const pageModal = document.getElementById("pageModal");
  pageModal.style.display = "flex";

  // STEP 3 - Create a variable and assign the token you stored in the local storage to it.
  const authToken = localStorage.getItem("adminObj");
  const tokenAcquired = JSON.parse(authToken);
  const token = tokenAcquired.token;

  // STEP 4 - Convert the variable you created above to an object using the JSON.parse method.
  const headers = new Headers();

  // STEP 7 - To the Headers() constructor above append the authorization and bearer token to it.
  headers.append("Authorization", `Bearer ${token}`);

  // STEP 8 - Create a request object and add the method and headers key-value pair to it.
  const request = {
    method: "GET",
    headers: headers,
  };

  // STEP 9 - Create a URL variable and then assign the API link to it.
  const url = "https://pluralcodesandbox.com/yorubalearning/api/admin/admin_dashboardapi";

  // STEP 10 - Use the fetch api and add the URL and request object created to it as a parameter.
  fetch(url, request)
    .then((response) => response.json())
    .then((result) => {
      // STEP 12 - Then get the result and do the following to the result from the endpoint...
      // STEP 13 - get the ID of the cards on the dashboard.html file namely category, learningMaterials, subCategories, totalQuiz, totalStudents, and adminUsername, remember, the last one is the Username situated at the navbar.
      const getCategory = document.getElementById("category");
      const getLearningMaterials = document.getElementById("learningMaterials");
      const getSubCategories = document.getElementById("subCategories");
      const getTotalQuiz = document.getElementById("totalQuiz");
      const getTotalStudents = document.getElementById("totalStudents");
      const getAdminUserName = document.getElementById("adminUserName");

      // STEP 14 - Now, to each of them, add the corresponding result to their innerHTML
      getCategory.innerHTML = result.total_number_of_categories;
      getLearningMaterials.innerHTML = result.total_number_of_learning_materials;
      getSubCategories.innerHTML = result.total_number_of_subcategories;
      getTotalQuiz.innerHTML = result.total_number_of_quizzes;
      getTotalStudents.innerHTML = result.total_number_of_students;
      getAdminUserName.innerHTML = result.admin_username;

      // STEP 15 - Change the style of the pageModal to none.
      pageModal.style.display = "none";
    })
    .catch((error) => console.log("error", error));
}

// STEP 16 - Call the function you just created from step 1.
displayCardContents();

// To get top three students

// STEP 1 - Get the top three student button from the dashboard.html
const topThreeStudentBtn = document.getElementById("topThreeStudent");

// STEP 2 - To this button, add an event listener with a click event and a callback function that has an event params passed to it.
topThreeStudentBtn.addEventListener("click", (event) => {
  // STEP 3 - Prevent the default behavior of buttons using the normal process.
  event.preventDefault();

  // STEP 4 - Get the studentModal and then add style block to it.
  const studentModal = document.getElementById("studentModal");
  studentModal.style.display = "block";

  // STEP 5 - Get the token stored on your local storage, convert it to an object and then get the actual token from the object
  const authToken = localStorage.getItem("adminObj");
  const tokenAcquired = JSON.parse(authToken);
  const token = tokenAcquired.token;

  // STEP 6 - Create a new Header constructor and assign that to a variable
  const headers = new Headers();

  // STEP 7 - Append this "Authorization", Bearer ${token} to the variable you created above.
  headers.append("Authorization", `Bearer ${token}`);

  // STEP 8 - Create a request object and add the method and headers key-value pair to it.
  const request = {
    method: "GET",
    headers: headers,
  };

  // STEP 9 - Create a URL variable and then assign the API link to it.
  const url = "https://pluralcodesandbox.com/yorubalearning/api/admin/top_three_students";

  // STEP 10 - Initialize an array. I.e create an empty array literal, name it resultData.
  const resultData = [];

  // STEP 11 - Use the fetch api and add the URL and request object created to it as a parameter.
  fetch(url, request)
    .then((response) => response.json())
    .then((result) => {
      // STEP 13 - Then get the result and do the following to the result from the endpoint...
      // STEP 14 - Get the div that will contain the dynamically created top 3 students information from your HTML, you can name it getBestStudents
      const getBestStudents = document.getElementById("topThreeScores");

      // STEP 15 - Write an if statement that checks if the length of the result is equal to zero
      if (result.length === 0) {
        // write a notify to the users
        getBestStudents.innerHTML = "No Information Found";
      } else {
        // STEP 16 - Use the map method on the result
        result.map((student) => {
          // When looping through the result, create a div that dynamically displays the contents necessary
          const studentDiv = document.createElement("div");
          studentDiv.innerHTML = `
            <span>Name: ${student.name}</span>
            <span>Email: ${student.email}</span>
            <span>Phone Number: ${student.phone_number}</span>
            <span>Position: ${student.position}</span>
            <span>Total Score: ${student.total_score}</span>
          `;
          resultData.push(studentDiv);
        });

        // STEP 17 - Get the bestStudents div and assign the resultData above to its innerHTML
        const bestStudentsDiv = document.getElementById("topThreeScores");
        bestStudentsDiv.innerHTML = "";
        resultData.forEach((student) => {
          bestStudentsDiv.appendChild(student);
        });
      }
    })
    .catch((error) => {
      console.log("error", error);
      const getBestStudents = document.getElementById("topThreeScores");
      getBestStudents.innerHTML = "Error occurred while fetching data.";
    });
});

// To close top three students

// STEP - Create a function declaration, get the studentModal" and set the style to display="none"
function closeStudentModal() {
  const studentModal = document.getElementById("studentModal");
  studentModal.style.display = "none";
}


function threeStudentModal() {
  const threeStudentModal = document.getElementsByClassName(".three-student-modal")
  threeStudentModal.style.width = "10px";
}