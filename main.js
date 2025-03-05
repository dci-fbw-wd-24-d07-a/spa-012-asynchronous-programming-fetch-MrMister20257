const container = document.querySelector("ul");
const btn = document.querySelector("button");


const processData = new Promise(async (resolve, reject) => {
    const res = await fetch("data.txt");
    const data = await res.text();
    const wordArray = data.split(/\s+/).sort((a, b) => a.localeCompare(b));

    if (wordArray.length > 0) {
        resolve(wordArray);
    } else {
        reject("Keine Daten vorhanden");
    };
});


btn.addEventListener('click', () => {
    processData
        .then(wordArray => {
            wordArray.forEach(element => {
                const li = document.createElement("li");
                li.textContent = element;
                container.appendChild(li);
            });
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("Anfrage beendet")); 
});