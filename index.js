
 let randomNumber1 = Math.floor(Math.random() * 6) + 1;

  let  randomImage1= `./dice${randomNumber1}.png`;
  let  image1=document.querySelectorAll("img")[0];

  image1.setAttribute("src",randomImage1);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let  randomImage2= `./dice${randomNumber2}.png`;
  let  image2=document.querySelectorAll("img")[1];

  image2.setAttribute("src",randomImage2);



    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "🚩Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerText = "Player 2 Wins!🚩";
    } else {
        document.querySelector("h1").innerText = "🏳It's a Draw!🏳";
    }


image1.addEventListener("click", actualizarImagenes);
image2.addEventListener("click", actualizarImagenes);






