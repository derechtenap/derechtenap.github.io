function killedMobs() {

    // Lege Farbe fest
    var COLORS = data.colors;
    var COLORS_BORDER = data.colors_border;

    var mobs = [];
    var values = [];
    var string = lang['minecraft:mobs'].hostile_mobs;

    // Remove old table
    $('[data-table-mobs-killed]').empty();

    for (let i = 0; i < Object.values(data[NAMESPACE + 'mobs'].hostile_mobs).length; i++) {
        let mob_type = data[NAMESPACE + 'mobs'].hostile_mobs[i];
        if (stat[MC__KILLED] === undefined || stat[MC__KILLED][NAMESPACE + mob_type] === undefined) {
            if (DEBUG) console.warn(NAMESPACE + mob_type + lang['mcstats:strings'].console.warn_undefined);
        } else {

            // Create table
            $('[data-table-mobs-killed]').append('<tr><td>' + string[i] + '</td><td><code>' +
                stat[MC__KILLED][NAMESPACE + mob_type] + '</code></td></tr>');
            mobs.push(string[i]);
            values.push(stat[MC__KILLED][NAMESPACE + mob_type]);
        }
    }

    // Create chart

    $('#chart-mobs').remove();


    if (stat[MC__KILLED] === undefined) {
        console.warn('KEINE MONSTER GETÖTET!');
    } else {
        $('[data-chart="chart_mobs"]').append('<canvas id="chart-mobs"></canvas>');
        var ctx = document.getElementById('chart-mobs').getContext('2d');
        var chartMobs = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: mobs,
                datasets: [{
                    label: 'Mob getötet',
                    backgroundColor: COLORS,
                    borderColor: COLORS_BORDER,
                    borderWidth: 1.5,
                    data: values
                }]
            },
            options: {}
        });

    }

}