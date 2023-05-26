let buttons = document.querySelectorAll(".class-options .unselectedButton")
let userSelectedText = document.querySelector(".user-selected span")
let backPage = document.querySelector(".back-page")

let elements = [
    document.querySelector(".classify"),
    document.querySelector(".confirmation")
]

let selectedButton = 0

function selectButton(number) {
    if (selectedButton !== 0) {
        buttons[selectedButton - 1].classList.toggle("selectedButton")
        buttons[selectedButton - 1].classList.toggle("unselectedButton")
    }

    buttons[number - 1].classList.toggle("selectedButton")
    buttons[number - 1].classList.toggle("unselectedButton")

    selectedButton = number
}

function disableButton(number) {
    selectedButton = 0
    buttons[number - 1].classList.toggle("selectedButton")
    buttons[number - 1].classList.toggle("unselectedButton")
}

function toggleDisplay(indexShow) {
    elements.forEach((element, index) => {
        element.style.display = (index === indexShow) ? 'flex' : 'none'
    })
}

function sendData() {
    if (selectedButton != 0) {
        userSelectedText.textContent = `You selected ${selectedButton} out of 5`
        toggleDisplay(1)
        backPage.style.cursor = 'pointer'
    }
}

function returnHome() {
    if (elements[0].style.display === 'none') {
        disableButton(selectedButton)
        toggleDisplay(0)
        backPage.style.cursor = 'initial'
    }
}

backPage.addEventListener("click", returnHome);


