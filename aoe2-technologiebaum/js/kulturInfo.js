function setzeKultur() {

    let box = document.getElementById('selectBox');
    let eingabe = box.options[box.selectedIndex].value;

    var anfrage = new Request('./daten/kulturen/' + eingabe + '.json');
    console.log('Lade Datei: ' + eingabe + '.json'); // Console.log später entfernen

    fetch(anfrage)

        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data); // Console.log später entfernen
            document.getElementById("civ-name").innerHTML = data.name;
            document.getElementById("civ-typ").innerHTML = data.typ;
            document.getElementById("civ-spezial").innerHTML = data.seinheit;
            document.getElementById("civ-teambonus").innerHTML = data.teambonus;

            // Entfernt alte Listen (Falls bereits eine andere Kultur gewählt wurde)
            let ul = document.getElementById('civ-bonus');
            ul.innerHTML = '';
            let ulx = document.getElementById('civ-spezialtechs');
            ulx.innerHTML = '';

            if (eingabe > 0) {

                // Lade Bonus
                for (let i = 1; i <= Object.keys(data.bonus).length; i++) {
                    let ul = document.getElementById('civ-bonus');
                    let li = document.createElement('li');
                    li.innerHTML = data.bonus[i];
                    ul.appendChild(li);
                }

                // Lade Spezialtechnologien
                for (let i = 1; i <= Object.keys(data.stech).length; i++) {
                    let ul = document.getElementById('civ-spezialtechs');
                    let li = document.createElement('li');
                    li.innerHTML = data.stech[i];
                    ul.appendChild(li);
                }
            }
        })

}