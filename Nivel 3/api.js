const reportJokes = [];
let actualJoke = '';

const jokeText = document.querySelector(".joke");

  async function buscarChiste() {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: 'application/json',
      },
    });

    const joke = response.json();
    return joke;
  }

  async function pulsarBoton() {
    const { joke } = await buscarChiste();
    actualJoke=joke;
    jokeText.innerText = joke;
    refresh();
  }

  function jokeScore(nota){
    const d = new Date();
    let text = d.toISOString();

    reportJokes.push({
      joke: actualJoke,
      score: nota,
      date: text,
    });

    display();
    console.log(reportJokes)
  }

  function display(){
    let showBtn = document.getElementById("scoreButtons");
    let showText = document.getElementById("scoreText");
    showBtn.style.display = "none";
    showText.style.display = "block";
  }

  function refresh(){
    let showBtn = document.getElementById("scoreButtons");
    let showText = document.getElementById("scoreText");
      showBtn.style.display = "block";
      showText.style.display = "none";
    }
  
  



