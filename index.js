// We use DOM to fetch the data inside the div in HTML
const Data = document.getElementById("details");

// Now we call our API by factch function:-
const getUsers = () => {
  Data.innerHTML = "Loading....."; // when click on button previous data will clean and showing loadingh if network will slow

  //This fetch function will return promise so we handle this promise through "then",
  //This then will return a response
  // This "response.json" will agin return a promise so we will agin use "then" keyword for it
  // And at the end of fetch method we use "catch keyword" to handle the errors
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      Data.innerHTML = "";
      return response.json();
    })
    .then((jsonData) => {
      // This "jsonData" is in the "Array Format" so we have to use "for of loop"
      for (user of jsonData) {
        const userDataDiv = document.createElement("div");
        userDataDiv.style.color = "black";
        userDataDiv.style.margin = "10px";
        userDataDiv.style.border = "1px solid navy";
        userDataDiv.style.padding = "10px";

        userDataDiv.innerHTML = [
          `userId :- ${user.id}<br>
          userName:- ${user.name}<br>
          @username:- ${user.username}<br>
          userEmail:- ${user.email}<br>
          user's Street:- ${user.address.street}<br>
          City zipcode:- ${user.address.zipcode}<br>
          City lattitude:- ${user.address.geo.lat}<br>
          City longitude:- ${user.address.geo.lng}<br>`,
        ];
        //
        // Now we append all this data inside the "UserData" variable
        Data.appendChild(userDataDiv);
      }
    })
    .catch((error) => {
      console.log(error);
      console.log("Network Error");
    });
};

//=========================== This is for Todos =============================================:-

const getTodos = () => {
  Data.innerHTML = "Loading.....";

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      Data.innerHTML = "";
      return response.json();
    })
    .then((jsonData) => {
      for (todo of jsonData) {
        const todosData = document.createElement("div");
        todosData.style.color = "black";
        todosData.style.margin = "10px";
        todosData.style.border = "1px solid navy";
        todosData.style.padding = "10px";

        todosData.innerHTML = [
          `
            userId:- ${todo.userId}<br>
             Title:- ${todo.title}<br>
             ID:- ${todo.id}
            `,
        ];

        Data.appendChild(todosData);
      }
    })
    .catch((error) => {
      console.log(error);
      console.log("Network Error");
    });
};
