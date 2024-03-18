// Test new account
// const data = {
//   hasAccount: false,
// };

// Test overview
const data = {
  hasAccount: true,
  users: [
    {
      id: 0,
      gender: false,
      firstname: "Tom",
      lastname: "Tomato",
    },
  ],
};

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

let currentPage;

const showUi = function makeCellPhoneAppear(data) {
  if (!data.hasAccount) {
    const createAccount = document.querySelector(".signup");
    createAccount.classList.toggle("off");
    currentPage = createAccount;
  } else {
    const overview = document.querySelector(".matching");
    overview.classList.toggle("off");
    currentPage = overview;
  }
};

const hideUi = function makeCellPhoneDisappear() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.code === "Escape") {
      currentPage.classList.toggle("off");
    }
  });
};

showUi(data);
hideUi();