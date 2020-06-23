$(document).ready(function () {
    $.getJSON("../hasil_scraping/result_sanjay.json", function (data) {
        console.log(data);
        var animalKind = [];
        //counting each Labels of Polygonlabels
        $.each(animals.tag, function (j, tag) {
            $.each(tag.polygonlabels, function (k, polygonlabels) {
                j = 0;
                found = false;

                while (j < animalKind.length && !found) {
                    if (polygonlabels == animalKind[j].polygonlabel) {
                        animalKind[j].y++;
                        found = true;
                    }
                    else
                        j++;
                }
                if (!found && (polygonlabels != undefined))
                    animalKind.push({ polygonlabel: polygonlabels, y: 1 });

            });
        });
    });
    // console.log(animalKind);
    animalKind.sort(compare);


    createChart("#polygonlabelChart", "Animal Kinds", "polygonlabel", animalKind);

});


function compare(a, b) {
    return (a.y > b.y) ? 1 : -1;
}

CanvasJS.addColorSet("greenShades",
    [//colorSet Array

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
        title:
        {
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