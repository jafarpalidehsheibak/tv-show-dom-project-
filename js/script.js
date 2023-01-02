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

// let result;
// const getData = async () => {
//   const res = await axios.get("episodes.json");
//   result = await res.data;
//   console.log(result);
//   return result;
// };
const el = document.querySelector(".movie-list");
// let output = "";
// getData().then((data) => {
//   data.forEach((element) => {
//     output += `
//     <div class="movie-list-item">
//               <img class="movie-list-item-img" src="img/avatar.jpg" alt="" />
//               <h3 class="movie-list-item-title">${element.name}</h3>
//               <p class="movie-list-item-desc">
//                 ${element.summary}
//               </p>
//               <button class="movie-list-item-button">Watch</button>
//             </div>
//     `;
//   });
//   el.innerHTML = output;
// });

// getData().then((data) => {
//   data.forEach((element) => {
//     showResult(element);
//   });
// });
let final = [];
const showResult = (chars) => {
  const res = chars
    .map((char) => {
      return `
    <div class="movie-list-item">
    
              <img class="movie-list-item-img" src="img/avatar.jpg" alt="" />
              <h3 class="movie-list-item-title">${char.name}</h3>
              <h4 class="movie-list-item-season">Season:  S0${char.season}E0${char.number}</h4>
              <p class="movie-list-item-desc">
                ${char.summary}
              </p>
              <button class="movie-list-item-button">Watch</button>
            </div>
    `;
    })
    .join("");
  el.innerHTML = res;
};

const load = async () => {
  try {
    const res = await fetch("episodes.json");
    final = await res.json();
    showResult(final);
    showSelect(final);
    console.log(final);
  } catch (err) {
    console.log(err);
  }
};
load();
const searchEl = document.querySelector("#searchinput");
searchEl.addEventListener("keyup", (e) => {
  const searchstr = e.target.value.toLowerCase();
  const filtered = final.filter((char) => {
    return (
      char.name.toLowerCase().includes(searchstr) ||
      char.summary.toLowerCase().includes(searchstr)
    );
  });
  // console.log(filtered);
  showResult(filtered);
});
const select = document.querySelector("#selectsearch");
const showSelect = (chars) => {
  const res = chars
    .map((char) => {
      return `
            <option value="${char.name}">S0${char.season}E0${char.number}-${char.name}</option>
    `;
    })
    .join("");
  select.innerHTML = res;
};
select.addEventListener("change", (e) => {
  const searchstr = e.target.value.toLowerCase();
  const filtered = final.filter((char) => {
    return (
      char.name.toLowerCase().includes(searchstr) ||
      char.summary.toLowerCase().includes(searchstr)
    );
  });
  // console.log(filtered);
  showResult(filtered);
});
