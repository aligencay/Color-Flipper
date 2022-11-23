const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const my_button = document.getElementById("btnColorChanger");
const my_color_span = document.getElementById("myColorSpan");

function getRandomHexChar() {
    return Math.floor(Math.random()*hex.length);
}

my_button.addEventListener("click",function(){
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomHexChar()];
    }
    my_color_span.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
})