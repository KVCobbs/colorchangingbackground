//So I just wanted to start the foundations of thinking before testing and then looking at a tutorial 
//so the idea is pretty simple you press the button the back ground color changes. I have an idea to use math.floor/math.random to make the color change 

//So It's friday october 28th. I'ma just look at the tutorial and take notes. 
//Depression is hitting hard so I am going passive learning. I just want to practice coming back to projects 

//I need to remember that whenever I get a document error in the console I should always expect an reference error becuase node javascript
//And browser javascript is different

//We set our variables grabbing the elements we need from the html here
const change = document.getElementById("change");
const color = document.getElementById("color");
const body = document.body;

//This event listener is waiting for the user to click the button so that the background can change 
change.addEventListener('click', changeBG)

//This function is the action of changing the background 
function changeBG(){
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();

    const colorString = `rgb(${col1}, ${col2}, ${col3})`;

    body.style.background=colorString;
    color.innterText=colorString

    console.log(colorString)
}

//This function declaration is how the random color is going to be generated 
function getRandomRGB() {
    return Math.floor(Math.random() * 256); 
}