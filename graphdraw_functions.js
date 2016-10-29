function draw_circle(event) {

    var center = get_click_position(event)

    // http://www.w3schools.com/tags/canvas_arc.asp

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(center[0], center[1], 10, 0, 2*Math.PI);
    ctx.fillStyle = "purple";
    ctx.fill();

}

function get_click_position(event) {

    var x = event.clientX;
    var y = event.clientY;

    return [x, y]

}
