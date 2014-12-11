var x_angle = 0;
var y_angle = 0;
var z_angle = 0;

window.onload = function() {
	var a = new Point3(50, -50, 0);
	var b = new Point3(100, -50, 0);
	var c = new Point3(50, 50, 0);
	var d = new Point3(100, 50, 0);
	var a = new Point3(50, -50, -50);
	var b = new Point3(100, -50, -50);
	var c = new Point3(50, 50, -50);
	var d = new Point3(100, 50, -50);


	var cc = document.getElementById("Canvas");
	var ctx = cc.getContext("2d");
	ctx.moveTo(100,100);
	ctx.lineTo(a.x_pos + 100,a.y_pos + 100);
	ctx.stroke();
	
	ctx.moveTo(100,100);
	ctx.lineTo(b.x_pos + 100,b.y_pos + 100);
	ctx.stroke();

	ctx.moveTo(100,100);
	ctx.lineTo(c.x_pos + 100,c.y_pos + 100);
	ctx.stroke();

	ctx.moveTo(100,100);
	ctx.lineTo(d.x_pos + 100,d.y_pos + 100);
	ctx.stroke();


	// PointRotation(TestPoint);

	// ctx.moveTo(100,100);
	// ctx.lineTo(TestPoint.x_pos + 100,TestPoint.y_pos + 100);
	// ctx.stroke();


};
function Point3 (x, y, z) {
    this.x_pos = x;
    this.y_pos = y;
    this.z_pos = z;
}

function PointRotation(p) {
	console.log(p.x_pos);
	console.log(p.y_pos);
	console.log(p.z_pos);
	var x_copy = p.x_pos;
	var y_copy = p.y_pos;
	var z_copy = p.z_pos;

	// convert degree to radians
	x_angle = x_angle / 180.0 * Math.PI; 
	y_angle = y_angle / 180.0 * Math.PI;
	z_angle = z_angle / 180.0 * Math.PI;


	var cx = Math.cos(x_angle);
	var cy = Math.cos(y_angle);
	var cz = Math.cos(z_angle);
	var sx = Math.sin(x_angle);
	var sy = Math.sin(y_angle);
	var sz = Math.sin(z_angle);

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

	console.log(p.x_pos);
	console.log(p.y_pos);
	console.log(p.z_pos);
}