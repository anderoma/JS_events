//Fonction 1
let footerClick = document.querySelector('footer');
let compt = 0;
footerClick.addEventListener("click", function(){ 
  compt++;
  console.log("clique numéro " + compt);
})

//Fonction 2
let hamburgerMenu = document.getElementById("navbarHeader");
let hamburgerbtn = document.querySelector(".navbar-toggler");
let onMenuClick = function() {
 hamburgerMenu.classList.toggle("collapse")
};
hamburgerbtn.addEventListener("click", onMenuClick);

//Fonction 3
let cardEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
let textCard = document.getElementsByClassName("card-text");
cardEdit[0].addEventListener("click", function(){
  textCard[0].style.color = 'red';
})

//Fonction 4
cardEdit[1].addEventListener("click", function(){
  if (textCard[1].style.color == 'green'){
    textCard[1].style.color = 'black';
  }
  else {
    textCard[1].style.color = 'green';
  }
})

//Fonction 5
let navbar = document.querySelector('header');
let check = 1;
navbar.addEventListener("dblclick", function(){
  if (check == 0){
    document.styleSheets[0].disabled = false;
    check = 1;
  }
  else {
    document.styleSheets[0].disabled = true;
    check = 0;
  }
})

//Fonction 6
let imgcard = document.getElementsByClassName("card-img-top");
let cardView = document.getElementsByClassName("btn btn-sm btn-success");

for (let i = 0; i < cardView.length; i++) {
  cardView[i].addEventListener("mousemove", function(){
    if (textCard[i].style.display == "none"){
      imgcard[i].style.width = "100%";
      textCard[i].style.display = "block";
    }
    else {
      imgcard[i].style.width = "20%";
      textCard[i].style.display = "none";
    }
  })
}
