var x_angle = 0;
var y_angle = 0;
var z_angle = 0;

var cc; 
var ctx;

// var LeftDiag = new Line(new Point3(75, 12.5, 0), new Point3(100, -30.8, 0));
// var RightDiag = new Line(new Point3(125, 12.5, 0), new Point3(100, -30.8, 0));
// var Bottom = new Line(new Point3(75, 12.5, 0), new Point3(125, 12.5, 0));
// var TopToCenter = new Line(new Point3(100, -30.8, 0), new Point3(100, 0, 43.3));
// var LeftToCenter = new Line(new Point3(75, 12.5, 0), new Point3(100, 0, 43.3));
// var RightToCenter = new Line(new Point3(125, 12.5, 0), new Point3(100, 0, 43.3));

var linesPyramid;
var intervalRotation = 100
var timer;

function Reset() {
	ctx.beginPath();
	ctx.clearRect ( 0 , 0 , cc.width, cc.height );
	setLines();
	redraw();
}

function mouseUp() {
	clearInterval(timer);
}

function XangleP() {
	timer = setInterval(function(){
		x_angle = 5;
	    y_angle = 0;
	    z_angle = 0;
	    erasePyramid();
	    transforDrawing();
	    redraw();
	}, intervalRotation);
}

function XangleM() {
	timer = setInterval(function(){
	    x_angle = -5;
	    y_angle = 0;
	    z_angle = 0;
	    erasePyramid();
	    transforDrawing();
	    redraw();
    }, intervalRotation);
}

function YangleP() {
	timer = setInterval(function(){
	    x_angle = 0;
	    y_angle = 5;
	    z_angle = 0;
	    erasePyramid();
	    transforDrawing();
	    redraw();
    }, intervalRotation);
}

function YangleM() {
	timer = setInterval(function(){
	    x_angle = 0;
	    y_angle = -5;
	    z_angle = 0;
	    erasePyramid();
	    transforDrawing();
	    redraw();
    }, intervalRotation);
}

function ZangleP() {
	timer = setInterval(function(){
	    x_angle = 0;
	    y_angle = 0;
	    z_angle = 5;
	    erasePyramid();
	    transforDrawing();
	    redraw();
    }, intervalRotation);
}

function ZangleM() {
	timer = setInterval(function(){
	    x_angle = 0;
	    y_angle = 0;
	    z_angle = -5;
	    erasePyramid();
	    transforDrawing();
	    redraw();
    }, intervalRotation);
}


window.onload = function() {
	cc = document.getElementById("Canvas");
	ctx = cc.getContext("2d");
	setLines();
	redraw();
};

function setLines() {
	var LeftDiag = new Line(new Point3(-50, 25, 0), new Point3(0, -61.6, 0));
	var RightDiag = new Line(new Point3(50, 25, 0), new Point3(0, -61.6, 0));
	var Bottom = new Line(new Point3(-50, 25, 0), new Point3(50, 25, 0));
	var TopToCenter = new Line(new Point3(0, -61.6, 0), new Point3(0, 0, 86.6));
	var LeftToCenter = new Line(new Point3(-50, 25, 0), new Point3(0, 0, 86.6));
	var RightToCenter = new Line(new Point3(50, 25, 0), new Point3(0, 0, 86.6));
	linesPyramid = [LeftDiag, RightDiag, Bottom, TopToCenter, LeftToCenter, RightToCenter];
}

function redraw() {
	DrawOrigin();
	ctx.beginPath();
	for (var i = 0; i < linesPyramid.length; i++) {
		DrawLine(linesPyramid[i]);
	}
}

function transforDrawing() {
	for (var i = 0; i < linesPyramid.length; i++) {
		LineRotation(linesPyramid[i]);
	}
}

function erasePyramid() {
	for (var i = 0; i < linesPyramid.length; i++) {
		ctx.beginPath();
		ctx.strokeStyle="#ffffff";
		ctx.moveTo(linesPyramid[i].p1.x_pos + 150,linesPyramid[i].p1.y_pos + 150);
		ctx.lineTo(linesPyramid[i].p2.x_pos + 150,linesPyramid[i].p2.y_pos + 150);
		ctx.stroke();
		ctx.moveTo(linesPyramid[i].p1.x_pos + 150,linesPyramid[i].p1.y_pos + 150);
		ctx.lineTo(linesPyramid[i].p2.x_pos + 150,linesPyramid[i].p2.y_pos + 150);
		ctx.stroke();
		ctx.moveTo(linesPyramid[i].p1.x_pos + 150,linesPyramid[i].p1.y_pos + 150);
		ctx.lineTo(linesPyramid[i].p2.x_pos + 150,linesPyramid[i].p2.y_pos + 150);
		ctx.stroke();
	}
}

function DrawLine(line) {
	ctx.strokeStyle="#ff0000";
	ctx.moveTo(line.p1.x_pos + 150,line.p1.y_pos + 150);
	ctx.lineTo(line.p2.x_pos + 150,line.p2.y_pos + 150);
	ctx.stroke();
}

function Line (p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
}

function DrawOrigin() {
	// bug need to chop of line or it will change all the lines' colors
	ctx.beginPath();
	ctx.strokeStyle="#000000";

	ctx.moveTo(0,150);
	ctx.lineTo(300,150);
	ctx.stroke();

	ctx.moveTo(150,0);
	ctx.lineTo(150,300);
	ctx.stroke();
}

function Point3 (x, y, z) {
    this.x_pos = x;
    this.y_pos = y;
    this.z_pos = z;
}

function LineRotation(line) {
	PointRotation(line.p1);
	PointRotation(line.p2);
}

function PointRotation(p) {
	var x_copy = p.x_pos;
	var y_copy = p.y_pos;
	var z_copy = p.z_pos;

	// convert degree to radians
	var x_angle_copy = x_angle / 180.0 * Math.PI; 
	var y_angle_copy = y_angle / 180.0 * Math.PI;
	var z_angle_copy = z_angle / 180.0 * Math.PI;


	var cx = Math.cos(x_angle_copy);
	var cy = Math.cos(y_angle_copy);
	var cz = Math.cos(z_angle_copy);
	var sx = Math.sin(x_angle_copy);
	var sy = Math.sin(y_angle_copy);
	var sz = Math.sin(z_angle_copy);

	var xx = cz*cx;
	var xy = sz*cx;
	var xz = -1 * sx;

	var yx = cz*sx*sy - sz*cy;
	var yy = sz*sx*sy + cz*cy;
	var yz = cx*sy;

	var zx = cz*sx*cy + sz*sy;
	var zy = sz*sx*cy - cz*sy;
	var zz = cx*cy;


	p.x_pos = x_copy * xx + y_copy * xy + z_copy * xz;
	p.y_pos = x_copy * yx + y_copy * yy + z_copy * yz;
	p.z_pos = x_copy * zx + y_copy * zy + z_copy * zz;
}