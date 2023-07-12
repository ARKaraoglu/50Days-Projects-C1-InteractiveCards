const panels = document.querySelectorAll(".main__panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    for (let x = 0; x < panels.length; x++) {
        panels[x].classList.remove("active");
    }
}
