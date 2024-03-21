// Test new account
const data = {
  hasAccount: false,
};

// Test overview
// const data = {
//   hasAccount: true,
//   users: [
//     {
//       id: 0,
//       gender: false,
//       firstname: "Tom",
//       lastname: "Tomato",
//     },
//   ],
// };

// Test overview scroll
// let data = {
//    "hasAccount":true,
//    "users":[
//       {
//          "id":0,
//          "gender":false,
//          "firstname":"Tom",
//          "lastname":"Tomato"
//       },
//       {
//          "id":2,
//          "gender":false,
//          "firstname":"Tom",
//          "lastname":"Tomata"
//       },
//       … Many other users
//    ]
// };

// Show UI

let currentPage;

const showUi = function makeCellPhoneAppear(data) {
  if (!data.hasAccount) {
    const createAccount = document.querySelector(".signup");
    createAccount.classList.toggle("off");
    currentPage = createAccount;
  } else {
    const overview = document.querySelector(".login");
    overview.classList.toggle("off");
    currentPage = overview;
  }
};

const hideUi = function makeCellPhoneDisappear() {
  const phone = currentPage.contentDocument.querySelector(".phone");
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.code === "Escape") {
      phone.classList.toggle("show");
      phone.classList.toggle("hide");
    }
  });

  const homeBar = currentPage.contentDocument.querySelector(".home-bar");
  homeBar.addEventListener("click", () => {
    phone.classList.toggle("show");
    phone.classList.toggle("hide");
  });
};

showUi(data);
hideUi();

// Create account functionality

const userAccount = {
  firstname: "",
  lastname: "",
  gender: "",
  interest: "",
};

const switchPage = function switchToChoosingPage() {
  const signup = document.querySelector(".signup");
  signup.classList.toggle("off");

  const choosing = document.querySelector(".choosing");
  choosing.classList.toggle("off");
};

const createUserAccount = () => {
  // Get initial page details
  const signupPage = document.querySelector(".signup").contentDocument;

  const createAccountButton = signupPage.querySelector('button[type="submit"]');
  createAccountButton.addEventListener("click", () => {
    userAccount.firstname = signupPage.getElementById("fname").value;
    userAccount.lastname = signupPage.getElementById("sname").value;
    userAccount.gender = signupPage.querySelector(
      'input[name="gender"]:checked'
    ).value;
    switchPage();
  });

  // Get interests
  const choosingPage = document.querySelector(".choosing").contentDocument;
  const proceedButton = choosingPage.querySelector(".proceed");
  proceedButton.addEventListener("click", () => {
    const female = choosingPage.querySelector(".female-button.chosen");
    const male = choosingPage.querySelector(".male-button.chosen");

    if (female && male) {
      userAccount.interest = "Males and Females";
    } else if (female) {
      userAccount.interest = "Females";
    } else if (male) {
      userAccount.interest = "Males";
    }

    // Final outputs and page shutdown
    console.log(JSON.stringify(userAccount));
    alert("Account created");

    const phone = choosingPage.querySelector(".phone");
    phone.classList.toggle("show");
    phone.classList.toggle("hide");
  });
};

createUserAccount();
