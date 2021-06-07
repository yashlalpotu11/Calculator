let lightTheme = "styles/lightTheme.css";
let darkTheme = "styles/darkTheme.css";

//when press C button it will clear the screen
function clearScreen(){
    document.getElementById("result").value = "";
}

//entered value will appear on the screen
function liveScreen(value){
    document.getElementById("result").value += value;
}
function changeTheme(){
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href")==lightTheme){
        theme.href = darkTheme;
        darkMode.innerHTML = "Light Mode 🌞";
    }
    else{
        theme.href = lightTheme;
        darkMode.innerHTML = "Dark Mode 🌙";
    }
}