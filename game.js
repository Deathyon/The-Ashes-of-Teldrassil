// Lets make a game
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var d = document.getElementById("game");

var bg_img = new Image();
bg_img.src = "bg.svg";

var player_img = new Image();
player_img.src = "playeridleright.svg";
player_size = 36;
var player_running = false;

var player_sprite = new Image();
//player_sprite.src = "mario.gif";
//player_sprite.style = ""

var xpos = 555;
var ypos = 900;

function begin()
{
	//canvas.height = window.innerHeight - (window.innerHeight * .50);
	//canvas.width = window.innerWidth - (window.innerWidth * .50);
	setInterval(function () {update()}, 100);
}

function update()
{
	//canvas.height = window.innerHeight - (window.innerHeight * .50);
	//canvas.width = window.innerWidth - (window.innerWidth * .50);

	if(player_running == false)
    {
    	player_img.src = "playerrunright.svg";
    	player_running = true;
    }
    else
    {
    	player_img.src = "playeridleright.svg";
    	player_running = false;
    }

    ctx.drawImage(bg_img, 0, 0);
    ctx.drawImage(player_img, 10, canvas.height-player_size, player_size, player_size);
}