const player = {
    node: document.getElementById("player"),
    posX: 0,
    posY: 0,
    stepSize: 10,
    unit: "px",
    up: function() {
	this.posY -= this.stepSize;
	this.node.style.top = this.posY + this.unit; 
    },
    down: function() {
	this.posY += this.stepSize;
	this.node.style.top = this.posY + this.unit; 
    },
    left: function() {
	this.posX -= this.stepSize;
	this.node.style.left = this.posX + this.unit; 
    },
    right: function() {
	this.posX += this.stepSize;
	this.node.style.left = this.posX + this.unit; 
    }
}

const world = document.getElementById("world");

document.addEventListener("keydown", e => {
    console.log(e.key);
    switch(e.key) {
	case "w": player.up() ; break;
	case "a": player.left(); break;
	case "s": player.down(); break;
	case "d": player.right(); break;
    }
});

function mDown(o) {
    o.style.top = "20px";
}
