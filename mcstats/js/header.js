// Erzeugt alle Header Stats. Achtung: Der Mob-Kill-Stat gehört zur Funktion "createCustomStats"

function createHeaderStats() {
    // Blöcke abgebaut
    let count_mined_block = 0;
    for (let item of Object.keys(stat[MC__MINED])) {
        count_mined_block += stat[MC__MINED][item];
    }
    $('[data-stat-block-mined]').html(count_mined_block);

    // Verursachter Schaden
    let damage_dealt = stat[MC__CUSTOM][NAMESPACE + 'damage_dealt'];
    $('[data-stat-damage-dealt]').html((damage_dealt / 10) + ' &#9829;');

    // Distanz
    let distanz = 0;
    for (let i = 0; i < Object.keys(data[MC__CUSTOM].type).length; i++) {
        if (data[MC__CUSTOM].type[i].indexOf('_one_cm') != -1) { // -1 == Beinhaltet 
            let distanz_stat = (data[MC__CUSTOM].type[i]);
            if (stat[MC__CUSTOM][NAMESPACE + distanz_stat] === undefined) {
                if (DEBUG) console.warn(NAMESPACE + distanz_stat +  lang['mcstats:strings'].console.warn_undefined);
            } else {
                distanz += stat[MC__CUSTOM][NAMESPACE + distanz_stat];
            }
        }
    }
    distanz = distanz / 100000; // in km
    $('[data-stat-distance]').html(distanz.toFixed(2) + ' km');

    // Spielzeit
    let playtime = stat[MC__CUSTOM][NAMESPACE + 'play_one_minute'];
    // /20 Damit aus Ticks Sekunden werden und dann /3600 für die Stunden
    $('[data-stat-playtime').html(((playtime / 20) / 3600).toFixed(0) + ' Std.');

    // Items gecrafted
    let count_item_crafted = 0;
    for (let item of Object.keys(stat[MC__CRAFTED])) {
        count_item_crafted += stat[MC__CRAFTED][item];
    }
    $('[data-stat-item-crafted]').html(count_item_crafted);
}