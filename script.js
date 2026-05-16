const mode = document.querySelector(".mode")
const count = document.querySelector(".count")
const Buttons = document.querySelectorAll(".button")
const container = document.querySelector(".container")
const increment = document.querySelector(".increase");
const decrement = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const warning = document.querySelector(".warning")
count.textContent = 0;
// dark and light mode toggle
mode.addEventListener("click", (e) => {
    // console.log(e.target.className)
    if (e.target.classList.contains("mode")) {
        e.target.classList.remove("mode")
        e.target.classList.add("mode_dark")
        e.target.textContent = "Dark mode";
        count.classList.remove("count")
        count.classList.add("count_dark")
        Buttons.forEach((e) => {
            e.classList.remove("button")
            e.classList.add("button_darkMode")
        })
        container.classList.remove("container")
        container.classList.add("container_darkMode")


    }
    else if (e.target.classList.contains("mode_dark")) {
        e.target.classList.remove("mode_dark")
        e.target.classList.add("mode")
        e.target.textContent = "Light mode"
        count.classList.remove("count_dark")
        count.classList.add("count")
        Buttons.forEach((e) => {
            console.log(e)
            e.classList.remove("button_darkMode")
            e.classList.add("button")
        })
        container.classList.remove("container_darkMode")
        container.classList.add("container")

    }
})


// counter with increment decrement 

// warning massage 
function showMessage(message, color, time) {
    warning.style.display = "block";

    let p = warning.firstElementChild;

    p.textContent = message;
    p.style.color = color;

    setTimeout(() => {
        warning.style.display = "none";
    }, time);
}

// increment button
function incrementFunction() {
    let num = Number(count.textContent)
    count.textContent = num + 1;
    showMessage("Counter increased by 1.","green",500)
}
increment.addEventListener("click", (incrementFunction))

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        incrementFunction()
    }
})

// Decrement button
function decrementFunction() {
    let num = Number(count.textContent)
    if (num === 0) {
        count.textContent = 0
        showMessage("Cannot decrease further. Counter is already at zero.","red",700)
       
    } else {
        count.textContent = num - 1;
       showMessage("Counter decreased by 1.", "green",500)
    }
}
decrement.addEventListener("click", (decrementFunction))

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        decrementFunction()
    }
})

// reset
reset.addEventListener("click",()=>{
    count.textContent = 0
        warning.style.display = "block";
        showMessage("Counter reset successfully.", "green",700)
       
})