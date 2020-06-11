// Lädt alle minecraft:custom Stats in die jeweiligen data-stats

function createCustomStats() {

    // Lege Farbe fest
    var COLORS = data.colors;
    var COLORS_BORDER = data.colors_border;

    let item,
        string = lang[MC__CUSTOM].translation;
    var distance_values = [];
    var distance_types = [];
    var string_trans_distance = lang['minecraft:distance'].type;

    // Entferne alte Tabelle
    $('[data-table-custom-stats]').empty();

    for (let i = 0; i < Object.keys(data[MC__CUSTOM].type).length; i++) {
        item = NAMESPACE + data[MC__CUSTOM].type[i];
        if (stat[MC__CUSTOM][item] === undefined || stat[MC__CUSTOM][item] === null) {
            if (DEBUG) console.warn(item + lang['mcstats:strings'].console.warn_undefined);
            $('[data-stat="' + data[MC__CUSTOM].type[i] + '"]').replaceWith('<h5 class="' +
                'card-title h4" data-stat="' + data[MC__CUSTOM].type[i] + '">0</h5>');
        } else {
            // console.log(i, NAMESPACE + data[MC__CUSTOM].type[i], stat[MC__CUSTOM][item]);
            $('[data-table-custom-stats]').append('<tr><td>' + string[i] + '</td><td><code>' +
                stat[MC__CUSTOM][item] + '</code></td></tr>');
        }
        $('[data-stat="' + data[MC__CUSTOM].type[i] + '"]').html(stat[MC__CUSTOM][item]);
    }

    // Spielzeit seit dem letztem Tod
    // /20 für Ticks in Sekunden und /3600 für die Zeit in Stunden
    let playtime_death = ((stat[MC__CUSTOM][NAMESPACE + 'time_since_death']) / 20) / 3600;
    $('[data-stat-playtime-death]').html(playtime_death.toFixed(0) + ' Std.');

    // Gegenstände verbaucht
    let broken_items = 0;

    // TODO: Muss in alle Funktionen eingabut werden!
    if (stat[MC__BROKEN] === undefined) {
        if (DEBUG) console.warn('MC__BROKEN ist undefined! WURDEN KEINE WERKZEUGE VERBRAUCHT?');
    } else {
        for (const item of Object.keys(stat[MC__BROKEN])) {
            broken_items += stat[MC__BROKEN][item];
        }
    }

    $('[data-stat-broken-items]').html(broken_items);

    // Erzeuge Chart Distanz

    for (let j = 0; j < Object.keys(data['minecraft:distance'].type).length; j++) {
        let value = NAMESPACE + data['minecraft:distance'].type[j];
        if (stat[MC__CUSTOM][value] === undefined) {
            // TODO -- Message fehlt
        } else {
            distance_types.push(string_trans_distance[j]);
            distance_values.push(((stat[MC__CUSTOM][value]) / 100000).toFixed(2)); // cm in km
        }
    }

    $('#stat_distance').remove();
    $('[data-chart="stat_distance"]').append('<canvas id="stat_distance"></canvas>');

    var ctx = document.getElementById('stat_distance').getContext('2d');
    var chartDistance = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: distance_types,
            datasets: [{
                label: 'Distanz (in km)',
                backgroundColor: COLORS,
                borderColor: COLORS_BORDER,
                borderWidth: 1.5,
                data: distance_values
            }]
        },
        options: {
            legend: {
                display: false,
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
    });
}