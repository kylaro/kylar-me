
var scrollbarwidth = 15;

function resizeIt(){
    const canvas = document.querySelector("#kylar-canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight-scrollbarwidth*2;
    canvas.width = window.innerWidth-scrollbarwidth;
}

function handlePainting(){
    const canvas = document.querySelector("#kylar-canvas");
    const ctx = canvas.getContext("2d");

    let drawing = false;

    canvas.addEventListener("mousedown", () => {
        drawing = true;
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
    });

    var x = 0
    var y = 0
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

        new_time = Date.now();

        if(!drawing){
            ctx.moveTo(e.clientX - max_line_width, e.clientY - max_line_width);
            return;
        }


        //Math out the width of the line
        in_time = new_time - time;
        distance_moved = (x - e.clientX) ** 2 + (y - e.clientY) ** 2;
        distance_moved = (distance_moved)**0.5

        x = e.clientX;
        y = e.clientY;

        /* //debugging code
        count += 1;
        if(count > 200){
            ctx.font = "30px Arial";
            ctx.fillText(in_time, x, y);
            ctx.fillText(distance_moved, x, y + 40)
            count = 0;
        }*/
        distance_moved = distance_moved > distance_max ? distance_max: distance_moved;
        line_width = (( distance_max/(distance_moved*10)**.5 ) + line_width*9)/10.0
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
        ctx.lineWidth = line_width;
        ctx.lineCap = "round";
        ctx.lineTo(x - ctx.lineWidth, y - ctx.lineWidth);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - line_width, y - line_width);
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