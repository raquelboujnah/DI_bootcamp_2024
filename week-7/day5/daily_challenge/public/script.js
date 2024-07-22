const url = "http://localhost:3001/emojis";

const randomEmoji = document.getElementById('emoji')

const emojis = () => {
  fetch(url)
    .then((res) => res.json())
    .then((emojis) => {
    //   console.log(emojis.randomEmoji);
      randomEmoji.innerHTML = emojis.randomEmoji.emoji
    })
    .catch((e) => {
      console.log(e);
    });
};
emojis()