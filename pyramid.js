var x_angle = 90;
var y_angle = 0;
var z_angle = 0;

window.onload = function() {
	var TestPoint = new Point3(100, 100, 100);
	


	var c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(100,100);
	ctx.lineTo(TestPoint.x_pos + 100,TestPoint.y_pos + 100);
	ctx.stroke();

	PointRotation(TestPoint);

	ctx.moveTo(100,100);
	ctx.lineTo(TestPoint.x_pos + 100,TestPoint.y_pos + 100);
	ctx.stroke();


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

	p.x_pos = x_copy * Math.cos(y_angle) * Math.cos(z_angle) + y_copy * -1 * Math.cos(y_angle) 
					* Math.sin(z_angle) + z_copy * Math.sin(y_angle);
	p.y_pos = x_copy * (Math.cos(x_angle) * Math.sin(z_angle) + Math.cos(z_angle) * Math.sin(x_angle) 
					* Math.sin(y_angle)) + y_copy * (Math.cos(x_angle) * Math.cos(z_angle) - Math.sin(x_angle) 
					* Math.sin(y_angle) * Math.sin(z_angle))+ z_copy * -1 * Math.cos(y_angle) * Math.sin(x_angle);
	p.z_pos = x_copy * (Math.sin(x_angle) * Math.sin(z_angle) - Math.cos(x_angle) * Math.cos(z_angle) * Math.sin(y_angle)) 
					+ y_copy * (Math.cos(z_angle) * Math.sin(x_angle) + Math.cos(x_angle) * Math.sin(y_angle) 
					* Math.sin(z_angle)) + z_copy * Math.cos(x_angle) * Math.cos(y_angle);
	console.log(p.x_pos);
	console.log(p.y_pos);
	console.log(p.z_pos);
}