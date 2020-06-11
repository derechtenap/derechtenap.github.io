// Verbrauchte Spitzhacken ermitteln

function miner() {

    var broken_pickaxe = 0,
        used_pickaxe = 0;

    for (let i = 0; i < Object.keys(data['minecraft:items'].pickaxe).length; i++) {

        let type = NAMESPACE + data['minecraft:items'].pickaxe[i];

        // Prüfe erst ob überhaupt Items zerstört wurden...
        if (stat[MC__BROKEN] == undefined || stat[MC__BROKEN][type] == undefined) {

            // TODO Debug output
            $('[data-stat="broken_pickaxe"]').html(broken_pickaxe);
        } else {

            broken_pickaxe += stat[MC__BROKEN][type];
        }

        if (stat[MC__USED] == undefined || stat[MC__USED][type] == undefined) {

            // TODO Debug output
            $('[data-stat="used_pickaxe"]').html(used_pickaxe);
        } else {

            used_pickaxe += stat[MC__USED][type];
        }

    }

    $('[data-stat="broken_pickaxe"]').html(broken_pickaxe);
    $('[data-stat="used_pickaxe"]').html(used_pickaxe);

    // Erze abgebaut

    var mined_ore = 0;

    for (let i = 0; i < Object.keys(data['minecraft:blocks'].ore).length; i++) {

        let type = data['minecraft:blocks'].ore[i];

        if (stat[MC__MINED][NAMESPACE + type] === undefined) {
            // TODO
        } else {
            mined_ore += stat[MC__MINED][NAMESPACE + type];
        }

    }

    $('[data-stat="mined_ores"]').html(mined_ore);

    $('[data-stat="crafted_torch"').html(stat[MC__CRAFTED]['minecraft:torch']);

}