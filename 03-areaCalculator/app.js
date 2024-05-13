const PI = 3.14159;
let circumference;
let radius;

document.getElementById('mySubmit').onclick = function () {
    radius = document.getElementById('myRadius').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById(
        'circumference'
    ).textContent = `The circumference is ${circumference}`;
};
