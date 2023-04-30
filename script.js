const jokeBtn = document.querySelector("#joke-btn");
const jokeContainer = document.querySelector("#joke-container");

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit";

const getJoke = async () => {
  jokeContainer.classList.remove("fades");
  await fetch(url)
    .then((data) => data.json())
    .then((item) => {
      if (item.setup) {
        jokeContainer.innerText = `${item.setup}\n ${item.delivery}`;
      } else {
        jokeContainer.textContent = `${item.joke}`;
      }
      jokeContainer.classList.add("fades");
    });
};

jokeBtn.addEventListener("click", getJoke);
