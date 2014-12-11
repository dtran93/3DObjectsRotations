var x_angle = 0;
var y_angle = 0;
var z_angle = 0;

var cc; 
var ctx;

var LeftDiag = new Line(new Point3(75, 43.3/2, 0), new Point3(100, -43.3/2, 0));
var RightDiag = new Line(new Point3(125, 43.3/2, 0), new Point3(100, -43.3/2, 0));
var Bottom = new Line(new Point3(75, 43.3/2, 0), new Point3(125, 43.3/2, 0));
var TopToCenter = new Line(new Point3(100, -43.3/2, 0), new Point3(100, 0, 43.3));
var LeftToCenter = new Line(new Point3(75, 43.3/2, 0), new Point3(100, 0, 43.3));
var RightToCenter = new Line(new Point3(125, 43.3/2, 0), new Point3(100, 0, 43.3));

window.onload = function() {

	

	cc = document.getElementById("Canvas");
	ctx = cc.getContext("2d");
	DrawLine(LeftDiag, "#000000");
	DrawLine(RightDiag, "#000000")
	DrawLine(Bottom, "#000000");
	DrawLine(TopToCenter, "#000000");
	DrawLine(LeftToCenter, "#000000");
	DrawLine(RightToCenter, "#000000");
};

function erase(ctx) {
	DrawLine(LeftDiag, "#FFFFFF");
	DrawLine(RightDiag, "#FFFFFF")
	DrawLine(Bottom, "#FFFFFF");
	DrawLine(TopToCenter, "#FFFFFF");
	DrawLine(LeftToCenter, "#FFFFFF");
	DrawLine(RightToCenter, "#FFFFFF");
}

function redraw(ctx) {
	DrawLine(LeftDiag, "#000000");
	DrawLine(RightDiag, "#000000")
	DrawLine(Bottom, "#000000");
	DrawLine(TopToCenter, "#000000");
	DrawLine(LeftToCenter, "#000000");
	DrawLine(RightToCenter, "#000000");
}

function transforDrawing() {
	LineRotation(LeftDiag);
	LineRotation(RightDiag);
	LineRotation(Bottom);
	LineRotation(TopToCenter);
	LineRotation(LeftToCenter);
	LineRotation(RightToCenter);
}

function xangleP() {
	erase();
	x_angle = (x_angle + 5) % 360;
	transforDrawing();
	redraw();
}

function xangleM() {
	erase();
	x_angle = (x_angle - 5) % 360;
	transforDrawing();
	redraw();
}

function yangleP() {
	erase();
	y_angle = (y_angle + 5) % 360;
	transforDrawing();
	redraw();
}

function yangleM() {
	erase();
	y_angle = (y_angle - 5) % 360;
	transforDrawing();
	redraw();
}

function zangleP() {
	erase();
	erase();
	erase();
	erase();
	z_angle = (z_angle + 5);
	transforDrawing();
	for (var i = 0; i < 10000; i++) {
		console.log("i");
	}
	redraw();
}

function zangleM() {
	erase();
	z_angle = (z_angle - 5);
	transforDrawing();
	redraw();
}



function DrawLine(line, color) {
	if (color == "#000000") {
		ctx.strokeStyle="#000000";
	} else {
		ctx.strokeStyle="#FFFFFF";
	}
	ctx.moveTo(line.p1.x_pos + 150,line.p1.y_pos + 150);
	ctx.lineTo(line.p2.x_pos + 150,line.p2.y_pos + 150);
	ctx.stroke();
}

function Line (p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
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
	// console.log(p.x_pos);
	// console.log(p.y_pos);
	// console.log(p.z_pos);
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

	// console.log(p.x_pos);
	// console.log(p.y_pos);
	// console.log(p.z_pos);
}