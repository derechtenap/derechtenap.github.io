// Erzeugt ein Dropdown mit allen Spielern, welche in der DATA JSON angelegt wurden.

function createDropdown() {
    let name = "";
    for (let i = 0; i < Object.keys(playerDB.players).length; i++) {
        name = playerDB.players[i].name;
        $('[data-player-select]').append('<li><a class="dropdown-item" data-player-id="' + i +
            '" href="#?' + name + '">' + name + '</a></li>');
    }
}