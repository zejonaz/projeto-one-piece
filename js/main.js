const buttons = document.querySelectorAll('.button');

const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {

        deselectbutton();
        button.classList.add("selected");

        deselectcharacter();
        characters[index].classList.add("selected");

    });
});

function deselectcharacter() {
    const selectedcharacter = document.querySelector(".character.selected");
    selectedcharacter.classList.remove("selected");
}

function deselectbutton() {
    const selectedbutton = document.querySelector(".button.selected");
    selectedbutton.classList.remove("selected");
}
