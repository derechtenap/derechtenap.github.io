// Datei: main.js
// Autor: @derechtenap
// Version: 0.1.3

// Jeder Block sowie Items oder Mobs benutzen diesen Namespace. Mods haben ihren eigenen Namespace. 
// Deswegen gehören alle Werte mit diesem Namespace zum orginalen Minecraft ("Vanilla").
const NAMESPACE = 'minecraft:';

// Alle verfügbaren Statistik-Präfixe
const MC__CUSTOM = 'minecraft:custom';
const MC__MINED = 'minecraft:mined';
const MC__BROKEN = 'minecraft:broken';
const MC__CRAFTED = 'minecraft:crafted';
const MC__USED = 'minecraft:used';
const MC__PICKED_UP = 'minecraft:picked_up';
const MC__DROPPED = 'minecraft:dropped';
const MC__KILLED = 'minecraft:killed';
const MC__KILLED_BY = 'minecraft:killed_by';

// Präfixe der Fortschritte
const MC__STORY = 'minecraft:story';
const MC__NETHER = 'minecraft:nether';
const MC__END = 'minecraft:end';
const MC__ADVENTURE = 'minecraft:adventure';

// Verfügbare Sprachen: Deutsch ('de') oder Englisch ('en'). Die Seite wird dann in der jeweiligen 
// Sprache übersetzt.
const LANGUAGE = 'de';

// Die Pfade der jeweiligen Dateien
const PATH__PLAYERS = 'json/data/players.json';
const PATH__DATA = 'json/data/global.json';
const PATH__PLAYER_FILE = 'json/';
const PATH__LANG = 'json/lang/';

// Setze diese Veriable auf true, um weitere Informationen in der Konsole zu sehen
const DEBUG = true;

var data, // Enthält die global.json
    stat, // Enthält die Statistiken aus der, von Minecraft genenerieten, JSON-Datei
    lang, // Enthält die Übersetzungen
    playerDB, // Enthält alle Spieler
    id = 0;

// Lädt eine Datei und gibt diese zurück
function loadAjax(path, fileType) {
    let temp;

    $.ajax({
        url: path,
        cache: false,
        async: false,
        dataType: fileType,

        success: function(response) {
            temp = response;
        },

        error: function() {
            console.error('ERROR! mcSTATS failed to load ' + path + '. Is the Path correct?');
        }
    });

    return temp;
}

// Lädt die Statistken eines Spielers
function loadPlayer() {
    let temp;

    if (Object.keys(playerDB.players).length < id || id === undefined || id === null) {

        console.error(lang['mcstats:strings'].console.err_loadPlayer);
    } else {

        temp = loadAjax(PATH__PLAYER_FILE + playerDB.players[id].uuid + '.json', 'json');
    }
    
    // Überspringt die erste Ebene der JSON-Datei
    stat = temp.stats;
}

$('[data-player-select]').on('click', function() {

    // Setzt die ID per Klick im Menü
    id = event.target.getAttribute('data-player-id');
    console.info(lang['mcstats:strings'].console.info_setID + ' (' + id + ')');
    $('[data-name]').attr('data-player-id', id);

    // Lade die Seite neu
    updatePage(id);
});

function updatePage(id) {
    loadPlayer(id);
    createCustomStats();
    createHeader();
    killedMobs();
    miner();
}

// Laden aller Scripts und Dateien 
$(document).ready(function() {
    $.when(

        data = loadAjax(PATH__DATA, 'json'),
        lang = loadAjax(PATH__LANG + LANGUAGE + '.json', 'json'),
        playerDB = loadAjax(PATH__PLAYERS, 'json'),
        loadPlayer()

    ).done(function() {
        $.when(            
            
            $.getScript('js/bootstrap-tooltips.js'),
            $.getScript('js/dropdown.js'),
            $.getScript('js/meta.js'),
            $.getScript('js/header.js'),
            $.getScript('js/custom-stats.js'),
            $.getScript('js/miner.js'),
            $.getScript('js/killedMobs.js'),

            $.Deferred(function(deferred) {
                $(deferred.resolve);
            })
        )
        .done(function() {

            if (LANGUAGE != 'de') console.warn('Some Strings may not be localized. Check the' +
            '"lang" folder!');

            createDropdown();
            createCustomStats();
            createHeader();
            killedMobs();
            miner();
        });
    });

});