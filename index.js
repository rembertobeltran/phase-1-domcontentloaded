// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let replaceText = "This is really cool!";
    let message = document.getElementById("text").innerHTML = replaceText;
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
