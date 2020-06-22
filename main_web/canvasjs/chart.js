$(document).ready(function() {
    $.getJSON("Assets/Json/labellingResult.json", function(data) {
        console.log(data);
        var levels = [];
        var biomes = [];
        var animalKind = [];

        $.each(data, function(i, animals) {
            //counting each Labels of Level of Organization
            var j = 0;
            var found = false;

            while (j < levels.length && !found) {
                if (animals["Level of Organization"] == levels[j].levelLabel) {
                    levels[j].y++;
                    found = true;
                } else
                    j++;
            }
            if (!found && (animals["Level of Organization"] != undefined))
                levels.push({ levelLabel: animals["Level of Organization"], y: 1 });

            //counting each Labels of Biomes
            j = 0;
            found = false;
            var biome;

            if ("Terrestrial Biome" in animals)
                biome = animals["Terrestrial Biome"];
            else if ("Aquatic Biome" in animals)
                biome = animals["Aquatic Biome"];

            while (j < biomes.length && !found) {
                if (biome == biomes[j].biomeLabel) {
                    biomes[j].y++;
                    found = true;
                } else
                    j++;
            }
            if (!found && (biome != undefined))
                biomes.push({ biomeLabel: biome, y: 1 });



            //counting each Labels of Polygonlabels
            $.each(animals.tag, function(j, tag) {
                $.each(tag.polygonlabels, function(k, polygonlabels) {
                    j = 0;
                    found = false;

                    while (j < animalKind.length && !found) {
                        if (polygonlabels == animalKind[j].polygonlabel) {
                            animalKind[j].y++;
                            found = true;
                        } else
                            j++;
                    }
                    if (!found && (polygonlabels != undefined))
                        animalKind.push({ polygonlabel: polygonlabels, y: 1 });

                });
            });
        });
        // console.log(levels);
        // console.log(biomes);
        // console.log(animalKind);
        levels.sort(compare);
        biomes.sort(compare);
        animalKind.sort(compare);

        createChart("#levelChart", "Level of Organization", "levelLabel", levels);
        createChart("#biomeChart", "Biomes", "biomeLabel", biomes);
        createChart("#polygonlabelChart", "Animal Kinds", "polygonlabel", animalKind);

    });
});

function compare(a, b) {
    return (a.y > b.y) ? 1 : -1;
}

CanvasJS.addColorSet("greenShades", [ //colorSet Array

    "#2F4F4F",
    "#008080",
    "#2E8B57",
    "#3CB371",
    "#90EE90",
    "#8e6a55",
    "#abad71",
    "#8ea594",
    "#374046"
]);

function createChart(id, title, label, arr) {
    $(id).CanvasJSChart({
        // theme: "dark1",
        animationEnabled: true,
        colorSet: "greenShades",
        title: {
            text: title,
            fontFamily: "tahoma"
        },
        data: [{
            type: "doughnut",
            innerRadius: "60%",
            showInLegend: true,
            legendText: "{" + label + "}",
            toolTipContent: "<b>{ " + label + " }</b>: {y} (#percent%)",
            // indexLabel: "{polygonlabel}: #percent%",
            dataPoints: arr,
        }]
    });
}

/*
bool Buildings;//red
	bool Art;//olive
	bool Playground;//teal
	bool Street;//silver
	bool Tree;//green
	bool Water; //blue
	bool Mountain;//gray
	bool Worship;//fushshia
	bool farm;//yellow
	bool NA;//white
	bool Cars;//navy
	bool Stones;//black
	bool Pool;//aqua
	bool Monument;//purple
	bool Food;//maroon
    bool Education;//lime

    Alam            : Tree-Water-Mountain-Stones 
    Kota            : Worship-Cars-Street-Education
    Keluarga        : farm-Playground-Pool-Food
    Sejarah & Seni  : Art-Monument
    Other           : NA

    */