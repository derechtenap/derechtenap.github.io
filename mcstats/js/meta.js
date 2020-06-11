// Erzeugt Header Meta

function createHeader() {
    let profil = playerDB.players[id],
        name = profil.name,
        joined = profil.joined;
    $('[data-name]').html(name);
    $('[data-player-joined').html('Beigetreten am: ' + joined);
    // Wenn möglich wird webp verwendet...
    $('[data-img-avatar="webp"]').attr('srcset', '../../img/webp/' + id + '/avatar.webp');
    $('[data-img-avatar="png"]').attr('srcset', '../../img/png/' + id + '/avatar.png');
    // Fallback für alte Browser
    $('[data-img-avatar="fallback"]').attr('src', '../../img/png/' + id + '/avatar.png');
    // Favicon
    $('[data-icon').attr('href', '../../img/png/' + id + '/avatar.png');
    createHeaderStats();
}