/*Contains Geometric data: position and size*/
class Geo {
    constructur(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
    }
    
    inside(geo) {
    }
}

const world = {
    limit: document.getElementById("world").getBoundingClientRect(),
    contains: function(x, y) {
	if (this.limit.left <= x && x <= this.limit.right &&
	    this.limit.top <= y && y <= this.limit.bottom) {
	    return true;
	} else {
	    return false;
	}
    }
};

console.log(world);

const player = {
    node: document.getElementById("player"),
    width: document.getElementById("player").offsetWidth,
    height: document.getElementById("player").offsetHeight,
    posX: world.limit.left,
    posY: world.limit.top,
    posT: 0,//temperary position
    stepSize: 10,
    unit: "px",
    up: function() {
	this.posT = this.posY - this.stepSize;
	if(world.contains(this.posX, this.posT)) {
	    this.posY = this.posT;
	    this.node.style.top = this.posY + this.unit; 
	}
    },
    down: function() {
	this.posT = this.posY + this.stepSize;
	if(world.contains(this.posX, this.posT)) {
	    this.posY = this.posT;
	    this.node.style.top = this.posY + this.unit; 
	}
    },
    left: function() {
	this.posT = this.posX - this.stepSize;
	if (world.contains(this.posT, this.posY)) {
	    this.posX = this.posT;
	    this.node.style.left = this.posX + this.unit; 
	}
    },
    right: function() {
	this.posT = this.posX + this.stepSize;
	if (world.contains(this.posT, this.posY)) {
	    this.posX = this.posT;
	    this.node.style.left = this.posX + this.unit; 
	}
    }
}

document.addEventListener("keydown", e => {
    console.log(e.key);
    switch(e.key) {
	case "w": player.up() ; break;
	case "a": player.left(); break;
	case "s": player.down(); break;
	case "d": player.right(); break;
    }
});
