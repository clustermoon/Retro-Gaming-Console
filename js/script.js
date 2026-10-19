// Document elements
const consoles_button = document.getElementById("load_consoles");
const output = document.getElementById("error_message"); 

// Event listener on the button directly calls the following logic block on click
consoles_button.addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    console.log(data);

                    //render the consoles 
                
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

