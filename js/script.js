// fetch("episodes.json").then((res) => {
//   console.log(res);
//   return res.json();
// });
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "episodes.json", true);
// xhr.onload = function () {
//   console.log(this.responseText);
// };
// xhr.send();
axios
  .get("episodes.json")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => console.log(error));
