// Document elements
const consoles_button = document.getElementById("load_consoles");
const section_display = document.getElementById("section_display");
const output = document.getElementById("error_message"); 

// Event listener on the button directly calls the following logic block on click
consoles_button.addEventListener("click", function () {
    output.textContent = "";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    renderConsoles(data.consoles);
                } catch (err) {
                    output.textContent = "Could not parse the response.";
                }
            } else {
                output.textContent = "Request failed: " + xhr.status;
            }
        }
    };
    xhr.send();
});

function renderConsoles(consoles){
    section_display.innerHTML = "";

    consoles.forEach(function (item) {
        const console_card = document.createElement("div");
        console_card.className = "console_card";

        const img = document.createElement("img");
        img.className = "console_img";
        img.src = item.image;
        img.alt = item.name;

        const title = document.createElement("strong");
        title.className = "console_title";
        title.textContent = item.name;

        const details = document.createElement("span");
        const manufacturer = document.createElement("span");
        manufacturer.className = "console_maker";
        manufacturer.textContent = item.manufacturer;

        const separator = document.createElement("span");
        separator.textContent = " . ";

        const year = document.createElement("span");
        year.className = "console_year";
        year.textContent = item.year;

        details.append(manufacturer, separator, year);
        console_card.append(img, title, details);
        section_display.appendChild(console_card);
    });
}