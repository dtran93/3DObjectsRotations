var x_angle = 0;
var y_angle = 0;
var z_angle = 0;

var ccTetra; 
var ctxTetra;
var ccCube;
var ctxCube;

var linesTetra;
var linesCube;
var intervalRotation = 100;
var scaleObject = 1.5;
var rotationSize = 5;
var coordinateShift = 150;
var cubeWidth = 40 * scaleObject;
var colorObject = "#ff0000";
var timer;

function Reset(objectsCanvas, objectsCC) {
	objectsCanvas = [ctxTetra, ctxCube];
	objectsCC = [ccTetra, ccCube];
	for (var i = 0; i < objectsCanvas.length; i++) {
		objectsCanvas[i].beginPath();
		objectsCanvas[i].clearRect ( 0 , 0 , objectsCC[i].width, objectsCC[i].height );
		setLinesTetra();
		setLinesCube();
		redrawObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
	}
}

function mouseUp() {
	clearInterval(timer);
}

window.onload = function() {
	ccTetra = document.getElementById("CanvasPyramid");
	ctxTetra = ccTetra.getContext("2d");
	ccCube = document.getElementById("CanvasCube");
	ctxCube = ccCube.getContext("2d");
	setLinesTetra();
	setLinesCube();
	redrawObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
};

function setLinesTetra() {
	var LeftDiag = new Line(new Point3(-50 * scaleObject, 25 * scaleObject, -43.3 * scaleObject), new Point3(0, -61.6 * scaleObject, -43.3 * scaleObject));
	var RightDiag = new Line(new Point3(50 * scaleObject, 25 * scaleObject, -43.3 * scaleObject), new Point3(0, -61.6 * scaleObject, -43.3 * scaleObject));
	var Bottom = new Line(new Point3(-50 * scaleObject, 25 * scaleObject, -43.3 * scaleObject), new Point3(50 * scaleObject, 25 * scaleObject, -43.3 * scaleObject));
	var TopToCenter = new Line(new Point3(0, -61.6 * scaleObject, -43.3 * scaleObject), new Point3(0, 0, 43.3 * scaleObject));
	var LeftToCenter = new Line(new Point3(-50 * scaleObject, 25 * scaleObject, -43.3 * scaleObject), new Point3(0, 0, 43.3 * scaleObject));
	var RightToCenter = new Line(new Point3(50 * scaleObject, 25 * scaleObject, -43.3 * scaleObject), new Point3(0, 0, 43.3 * scaleObject));
	linesTetra = [LeftDiag, RightDiag, Bottom, TopToCenter, LeftToCenter, RightToCenter];
}

function setLinesCube() {
	var TopFront = new Line(new Point3(-cubeWidth, -cubeWidth, cubeWidth), new Point3(cubeWidth, -cubeWidth, cubeWidth));
	var BottomFront = new Line(new Point3(-cubeWidth, cubeWidth, cubeWidth), new Point3(cubeWidth, cubeWidth, cubeWidth));
	var LeftFront = new Line(new Point3(-cubeWidth, -cubeWidth, cubeWidth), new Point3(-cubeWidth, cubeWidth, cubeWidth));
	var RightFront = new Line(new Point3(cubeWidth, -cubeWidth, cubeWidth), new Point3(cubeWidth, cubeWidth, cubeWidth));

	var TopBack = new Line(new Point3(-cubeWidth, -cubeWidth, -cubeWidth), new Point3(cubeWidth, -cubeWidth, -cubeWidth));
	var BottomBack = new Line(new Point3(-cubeWidth, cubeWidth, -cubeWidth), new Point3(cubeWidth, cubeWidth, -cubeWidth));
	var LeftBack = new Line(new Point3(-cubeWidth, -cubeWidth, -cubeWidth), new Point3(-cubeWidth, cubeWidth, -cubeWidth));
	var RightBack = new Line(new Point3(cubeWidth, -cubeWidth, -cubeWidth), new Point3(cubeWidth, cubeWidth, -cubeWidth));

	var TLSide = new Line(new Point3(-cubeWidth, -cubeWidth, cubeWidth), new Point3(-cubeWidth, -cubeWidth, -cubeWidth));
	var TRSide = new Line(new Point3(cubeWidth, -cubeWidth, cubeWidth), new Point3(cubeWidth, -cubeWidth, -cubeWidth));
	var BLSide = new Line(new Point3(-cubeWidth, cubeWidth, cubeWidth), new Point3(-cubeWidth, cubeWidth, -cubeWidth));
	var BRSide = new Line(new Point3(cubeWidth, cubeWidth, cubeWidth), new Point3(cubeWidth, cubeWidth, -cubeWidth));

	linesCube = [TopFront, BottomFront, LeftFront, RightFront, TopBack, BottomBack, LeftBack, RightBack, TLSide, TRSide, BLSide, BRSide];
}

function XangleP() {
	timer = setInterval(function(){
		x_angle = rotationSize;
	    y_angle = 0;
	    z_angle = 0;
	    eraseObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
	    transforDrawing([linesTetra, linesCube]);
	    redrawObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
	}, intervalRotation);
}

function XangleM() {
	timer = setInterval(function(){
	    x_angle = -rotationSize;
	    y_angle = 0;
	    z_angle = 0;
	    eraseObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
	    transforDrawing([linesTetra, linesCube]);
	    redrawObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
    }, intervalRotation);
}

function YangleP() {
	timer = setInterval(function(){
	    x_angle = 0;
	    y_angle = rotationSize;
	    z_angle = 0;
	    eraseObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
	    transforDrawing([linesTetra, linesCube]);
	    redrawObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
    }, intervalRotation);
}

function YangleM() {
	timer = setInterval(function(){
	    x_angle = 0;
	    y_angle = -rotationSize;
	    z_angle = 0;
	    eraseObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
	    transforDrawing([linesTetra, linesCube]);
	    redrawObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
    }, intervalRotation);
}

function ZangleP() {
	timer = setInterval(function(){
	    x_angle = 0;
	    y_angle = 0;
	    z_angle = rotationSize;
	    eraseObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
	    transforDrawing([linesTetra, linesCube]);
	    redrawObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
    }, intervalRotation);
}

function ZangleM() {
	timer = setInterval(function(){
	    x_angle = 0;
	    y_angle = 0;
	    z_angle = -rotationSize;
	    eraseObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
	    transforDrawing([linesTetra, linesCube]);
	    redrawObject([linesTetra, linesCube], [ctxTetra, ctxCube]);
    }, intervalRotation);
}

function eraseObject(objectsTranform ,objectsCanvas) {
	for (var i = 0; i < objectsCanvas.length; i++) {
		for (var j = 0; j < objectsTranform[i].length; j++) {
			objectsCanvas[i].beginPath();
			objectsCanvas[i].strokeStyle="#ffffff";
			objectsCanvas[i].moveTo(objectsTranform[i][j].p1.x_pos + coordinateShift, objectsTranform[i][j].p1.y_pos + coordinateShift);
			objectsCanvas[i].lineTo(objectsTranform[i][j].p2.x_pos + coordinateShift, objectsTranform[i][j].p2.y_pos + coordinateShift);
			objectsCanvas[i].stroke();
			objectsCanvas[i].moveTo(objectsTranform[i][j].p1.x_pos + coordinateShift, objectsTranform[i][j].p1.y_pos + coordinateShift);
			objectsCanvas[i].lineTo(objectsTranform[i][j].p2.x_pos + coordinateShift, objectsTranform[i][j].p2.y_pos + coordinateShift);
			objectsCanvas[i].stroke();
			objectsCanvas[i].moveTo(objectsTranform[i][j].p1.x_pos + coordinateShift, objectsTranform[i][j].p1.y_pos + coordinateShift);
			objectsCanvas[i].lineTo(objectsTranform[i][j].p2.x_pos + coordinateShift, objectsTranform[i][j].p2.y_pos + coordinateShift);
			objectsCanvas[i].stroke();
		}
	}	
}

function redrawObject(objectsTranform, objectsCanvas) {
	for (var i = 0; i < objectsCanvas.length; i++) {
		DrawOrigin(objectsCanvas[i]);
		objectsCanvas[i].beginPath();
		for (var j = 0; j < objectsTranform[i].length; j++) {
			DrawLine(objectsTranform[i][j], objectsCanvas[i], colorObject);
		}
	}
}

function transforDrawing(objectsTranform) {
	for (var i = 0; i < objectsTranform.length; i++) {
		for (var j = 0; j < objectsTranform[i].length; j++) {
			LineRotation(objectsTranform[i][j]);
		}
	}
}

function DrawLine(line, canvas, color) {
	canvas.strokeStyle=color;
	canvas.moveTo(line.p1.x_pos + coordinateShift,line.p1.y_pos + coordinateShift);
	canvas.lineTo(line.p2.x_pos + coordinateShift,line.p2.y_pos + coordinateShift);
	canvas.stroke();
}

function Line(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
}

function DrawOrigin(canvas) {
	// bug need to chop of line or it will change all the lines' colors
	canvas.beginPath();
	canvas.strokeStyle="#000000";

	canvas.moveTo(0,coordinateShift);
	canvas.lineTo(coordinateShift * 2,coordinateShift);
	canvas.stroke();

	canvas.moveTo(coordinateShift,0);
	canvas.lineTo(coordinateShift,coordinateShift * 2);
	canvas.stroke();
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