const containers = document.querySelectorAll(".container");
const marks = document.querySelectorAll(".fa-xmark");

for (let x = 0; x < marks.length; x++) {
    marks[x].addEventListener('click', () => {
        if (marks[x].dataset.id === containers[x].dataset.id) {
            containers[x].style.display = "none";
        }
    })
}
