function displayGreeting() {
    var nameInput = document.getElementById("nameInput").value;
    var greetingMessage = document.getElementById("greetingMessage");

    if (nameInput.trim() !== "") {
        greetingMessage.innerHTML = "<p>Привіт, " + nameInput + "!</p>";
    } else {
        greetingMessage.innerHTML = "<p>Dведіть ваше ім'я.</p>";
    }
}