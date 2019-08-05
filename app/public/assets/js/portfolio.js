const portfolio = [
  {
    name: "Guessing Game",
    description: "Guess letters to name a Pokemon!",
    image: "./assets/images/WordGuessGame.png",
    link: "https://paulinabootcamp.github.io/WordGuessGame/"

  },
  {
    name: "House Cup Game",
    description: "Take on a wizarding challange to match the house cup number!",
    image: "../assets/images/HouseCupGame.png",
    link: "https://paulinabootcamp.github.io/HogwartsCup/"

  },
  {
    name: "GoT Trivia Game",
    description: "Something something",
    image: "../assets/images/TriviaGame.png",
    link: "https://paulinabootcamp.github.io/TriviaGame/"

  },
  {
    name: "GIF on Demand",
    description: "Get your GIF fix by dynamically searching for gifs",
    image: "../assets/images/GifphyAPI.png",
    link: "https://paulinabootcamp.github.io/GiphyHW/"

  },
  {
    name: "Hogwarts Express",
    description: "Something something",
    image: "../assets/images/TrainSchedule.png",
    link: "https://paulinabootcamp.github.io/Trains/"

  },
  {
    name: "Now You!",
    description: "App that allows physical theraphists to work with patients remotely",
    image: "../assets/images/NowYou.png",
    link: "https://ayang726.github.io/Project-1/"

  },
  {
    name: "Liri App",
    description: "Search various songs using this Node Express App",
    image: "../assets/images/LiriApp.PNG",
    link: "https://github.com/PaulinaBootcamp/liri-node-app"

  },
]


portfolio.forEach(element => {
  $(".card-deck").append(`
  <div class="col-md-4">
  <p><a href=${element.link}><img src=${element.image} style=" height: 200px;></a></p>
      <div class="caption">
          <p>${element.description}</p>    
    </div>
    </div>`)
});
