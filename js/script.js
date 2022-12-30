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
// axios
//   .get("episodes.json")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => console.log(error));
let result;
const getData = async () => {
  const res = await axios.get("episodes.json");
  result = await res.data;
  console.log(result);
  return result;
};
const el = document.querySelector(".movie-list");
let output = "";
getData().then((data) => {
  data.forEach((element) => {
    output += `
    <div class="movie-list-item">
              <img class="movie-list-item-img" src="img/avatar.jpg" alt="" />
              <h3 class="movie-list-item-title">${element.name}</h3>
              <p class="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque repellendus illo aspernatur debitis? Veniam expedita
                repellendus iste ea.
              </p>
              <button class="movie-list-item-button">Watch</button>
            </div>
    `;
  });
  el.innerHTML = output;
});
