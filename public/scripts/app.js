(function() {
    function Start()
    {
        console.log("Let's get started!");
    }
    window.addEventListener("load",Start);
})();

function submitForm(){
    var message = "Thank you for contacting me! I have received your message! I will repsonse to you as soon as possible! Have a wonderful day!"
    window.alert(message);
}
document.getElementById("submit").addEventListener("click", submitForm, false);