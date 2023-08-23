const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",()=> {
    // Genrating the hex color ---> #f15025
    let hexColor = '#';
    for(let i =0;i<6;i++){
        n = getrandomNumber();
        hexColor +=hex[n]
    }



  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

const getrandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
