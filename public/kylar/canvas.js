//require("SVG")
var scrollbarwidth = 20;
var stroke_color = "green"
var colors = [""]
function resizeIt(){
    const canvas = document.querySelector("#kylar-canvas");



    //const ctx = canvas.getContext("2d");

    //canvas.height = window.innerHeight-scrollbarwidth*2;
    //canvas.width = window.innerWidth-scrollbarwidth;
    canvas.setAttribute("width", window.innerWidth-scrollbarwidth+"px");
    canvas.setAttribute("height", window.innerHeight-scrollbarwidth*2+"px");
}

function handlePainting(){
    const canvas = document.querySelector("#kylar-canvas");
    //const ctx = canvas.getContext("2d");

    let drawing = false;

    canvas.addEventListener("mousedown", () => {
        drawing = true;
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
    });

    var x = 0
    var y = 0
    var new_x = 0;
    var new_y = 0;
    var time = 0;

    var movement_speed = 0;
    var distance_moved = 0;
    var distance_max = 30;
    var time = 0;
    var new_time = 0;
    var in_time = 0;

    var max_line_width = 10;
    var line_width = max_line_width;

    var count = 0
    function draw(e){

        new_time = Date.now()

        new_x = e.clientX - scrollbarwidth/2;
        new_y = e.clientY - scrollbarwidth;

        if(!drawing){
            //ctx.moveTo(e.clientX - max_line_width, e.clientY - max_line_width);
            x = new_x;
            y = new_y;
            return;
        }




        //Math out the width of the line
        in_time = new_time - time;
        distance_moved = (x - new_x) ** 2 + (y - new_y) ** 2;
        distance_moved = (distance_moved)**0.5

        if(distance_moved < 5){
            return;
        }
        distance_moved -= 4;


        /* //debugging code
        count += 1;
        if(count > 200){
            ctx.font = "30px Arial";
            ctx.fillText(in_time, x, y);
            ctx.fillText(distance_moved, x, y + 40)
            count = 0;
        }*/
        distance_moved = distance_moved > distance_max ? distance_max: distance_moved;
        line_width = (( distance_max/(distance_moved*15)**.5 ) + line_width*2)/3.0
        line_width = line_width > max_line_width ? max_line_width : line_width;

        //console.log(distance_moved, in_time);

        time = new_time

        //Drawing based on the math:


        //CIRCLES:
        /*
        ctx.beginPath();
        ctx.arc(x-line_width, y-line_width, line_width, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();*/

        //LINES:
        /*
        ctx.lineWidth = line_width;
        ctx.lineCap = "round";
        ctx.lineTo(x - ctx.lineWidth, y - ctx.lineWidth);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - line_width, y - line_width);
        */

        var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttribute('id',"line_"+Date.now());
        newLine.setAttribute('x1',x+'');
        newLine.setAttribute('y1',y+'');
        newLine.setAttribute('x2',new_x+'');
        newLine.setAttribute('y2',new_y+'');
        newLine.setAttribute("stroke", stroke_color)
        newLine.setAttribute("stroke-width", line_width)
        canvas.append(newLine);

        x = new_x;
        y = new_y;


    }

    canvas.addEventListener( "mousemove", draw)
    canvas.addEventListener("click", draw)
}

window.addEventListener("load", () => {
    resizeIt();
    handlePainting();
})


window.addEventListener("resize", () => {
    resizeIt();
});

const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];

var possible_colors = []

var typed = ""
var last_typed_time = 0;
window.addEventListener("keypress", (e) => {

    if(last_typed_time + 10000 < Date.now()){
        typed = ""
        last_typed_time = Date.now();
    }
    if(e.key == " "){
        typed = ""
        return;
    }
    typed += e.key.toLowerCase()
    last_typed_time = Date.now();




    console.log(typed);

    possible_colors = []
    CSS_COLOR_NAMES.forEach(  (str) =>{
        if(str.toLowerCase().substring(0,typed.length) == typed){
            possible_colors.push(str)
        }
    } )
    console.log(possible_colors)
    if(possible_colors.length == 0){
        typed = ""
    }else{
        stroke_color = possible_colors[0]
        if(possible_colors.length == 1){
            if(possible_colors[0].toLowerCase() == typed){
                typed = ""
            }
        }
    }

    var colorpicker = document.getElementById("colorpicker")
    colorpicker.innerHTML = "CHOOSE COLOR: press space and type color. " +
        "CURRENTLY:" + stroke_color + ( possible_colors.length > 1 ?  " . OPTIONS: " + possible_colors : "")




})