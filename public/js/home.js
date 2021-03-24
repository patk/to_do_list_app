console.log("HELLO FRONT END!");
document.addEventListener("DOMContentLoaded", () => {
  var addListForm = document.getElementById("add-list-form");

  const list = document.getElementById("list");

  addListForm.onsubmit = (event) => {
    //event.preventDefault();
    if (list.value !== "") {
      alert("New list has been added");
    }
  };
});
