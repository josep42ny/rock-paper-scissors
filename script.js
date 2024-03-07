document.addEventListener("mousedown", (event) => {
  switch(event.target.id) {
    case "playBtn":
      playRound(event.target.value);
      break;
    case "resetBtn":
      if(confirm("Restart game?")) {
        Logic.reset().updateVisual();
      }
    default:
  }
});

const Logic = {
    score: 0,
    round: 0,
    addScore: function(delta = 1) {
      this.score += delta;
      return this;
    },
    incrementRound: function() {
      this.round++;
      return this;
    },
};

const Visual = {
    score: document.querySelector("#score"),
    round: document.querySelector("#score"),
    update: function() {
      this.score.textContent = Logic.score;
      this.round.textContent = Logic.score;
      return this;
    },
    show: function(winner, looser, isWinner) {
      document.querySelector("#round").textContent = Logic.round;
      document.querySelectorAll(".option-card").forEach((elem) => {
      elem.classList.remove("win");
      elem.classList.add("hide");
      })
      document.querySelector(`#p${winner}`).classList.remove("hide");
      document.querySelector(`#c${looser}`).classList.remove("hide");
      switch(isWinner) {
        case 0:
          document.querySelector(`#c${looser}`).classList.add("win");
          return;
        case 1:
          document.querySelector(`#p${winner}`).classList.add("win");
          return;
        default:
          return;
      }
    }
  }
  
  function playRound(userPlay) {
    Logic.incrementRound();
    const computerPlay = getComputerPlay();
    const isVictory = checkVictory(userPlay, computerPlay);
    if (userPlay === computerPlay) {
      Visual.show(userPlay, computerPlay);
    } else if (isVictory) {
      Logic.addScore(1);
      Visual.show(userPlay, computerPlay, 1);
    } else {
      Visual.show(userPlay, computerPlay, 0);
    }
    Visual.update();
  }
  
  function checkVictory(main, opponent) {
    const victoryCases = ["paperrock", "rockscissors", "scissorspaper"];
    const currentCase = main.toLowerCase() + opponent.toLowerCase();
    for (let victoryCase of victoryCases) {
      if (currentCase === victoryCase) {return true;}
    }
    return false;
  }
  
  function getComputerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
  }