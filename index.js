// 2
let greetings = prompt("Слава Україні! Як тебе звати?");
alert(`Привіт ${greetings}. Давай подивимося домашнє завдання Альбіни Шевчук`);

// 1
function calculateVolume(event) {
    event.preventDefault();
    let heightCylinder = document.querySelector("#input-height");
    let diametrCylinder = document.querySelector("#input-diametr");
    alert("Рахую...");
    let volumeCylinder = 3.14*heightCylinder.value * diametrCylinder.value;
    let resultVolume = document.querySelector("#volume-cylinder");
    resultVolume.innerHTML = `${volumeCylinder}`;
};

let cylinderForm = document.querySelector("#cylinder-form");

cylinderForm.addEventListener("submit", calculateVolume);


//  3
function calculatePerimeter(event) {
    event.preventDefault();
let lengthSquare = prompt("Яка довжина сторони квадрата");
let perimetrSquare = Number(lengthSquare) * 4;
alert(`Периметр твого квадрату ${perimetrSquare}`);
}

let squareForm = document.querySelector("#square-form");
squareForm.addEventListener("submit", calculatePerimeter)

// 4
function calculateSpeed(event) {
    event.preventDefault();
    let distance = document.querySelector("#input-km");
    let hour = document.querySelector("#input-hour");
    alert("Рахую...");
    let needSpeed = distance.value/hour.value;
    let resultSpeed = document.querySelector("#need-speed");
    resultSpeed.innerHTML = `${needSpeed}`;
};

let speedForm = document.querySelector("#speed-form");

speedForm.addEventListener("submit", calculateSpeed);


