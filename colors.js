var interval;
var left;
var right;
var cycle = true;
					
//Change the wallpaper every hour
function colorTime() 
{			
	interval = setInterval(colorCycle, (1000 * 60 * 60));
}
	
function colorCycle()
{
	if(cycle)
	{
		selectRandomColor();
	}
}
	
function setCycle(x)
{				
	cycle = x;				
}

//changes the background color of element x
function setBackgroundColor(x, y)
{
	document.getElementById(x).style.backgroundColor = y;
}

//creates a gradient for element x in form of RGB with colors left side RGB and right side xyz
function setBackgroundGradient(e, x, y)
{
	document.getElementById(e).style.background = "linear-gradient(115deg, "+ x + ", " + y;
}

function selectRandomColor()
{
	
	//pick 6 random colors
	//left				
	var r = randomColor(195, 20);
	var g = randomColor(195, 20);
	var b = randomColor(195, 20);	
	left = "rgb(" + r + "," + g + "," + b + ")";
	//right
	var rR = randomColor(195, 20);
	var gR = randomColor(195, 20);
	var bR = randomColor(195, 20);
	right = "rgb(" + rR + "," + gR + "," + bR + ")";
	
	//change text to rgb and hex values for our colors
	document.getElementById('HEX').innerHTML = "0x" + r.toString(16).toUpperCase() + g.toString(16).toUpperCase() + b.toString(16).toUpperCase();
	document.getElementById('HEX2').innerHTML = "0x" + rR.toString(16).toUpperCase() + gR.toString(16).toUpperCase() + bR.toString(16).toUpperCase();
	document.getElementById('RGB').innerHTML = "RGB " + r + " " + g + " " + b;
	document.getElementById('RGB2').innerHTML = "RGB " + rR + " " + gR + " " + bR;				
	
	//set background colors	and create gradient
	setBackgroundGradient('bgimg', left, right);
	setBackgroundColor('leftsquare', left);
	setBackgroundColor('rightsquare', right);
	
}

function selectRandomLeft()
{
	
	//pick 3 random colors		
	var r = randomColor(195, 20);
	var g = randomColor(195, 20);
	var b = randomColor(195, 20);	
	left = "rgb(" + r + "," + g + "," + b + ")";
	
	//change text to rgb and hex values for our colors
	document.getElementById('HEX').innerHTML = "0x" + r.toString(16).toUpperCase() + g.toString(16).toUpperCase() + b.toString(16).toUpperCase();
	document.getElementById('RGB').innerHTML = "RGB " + r + " " + g + " " + b;		
	
	//set background colors	and create gradient
	setBackgroundGradient('bgimg', left, right);
	setBackgroundColor('leftsquare', left);
	
}

function selectRandomRight()
{

	//pick 3 random colors			
	var r = randomColor(195, 20);
	var g = randomColor(195, 20);
	var b = randomColor(195, 20);	
	right = "rgb(" + r + "," + g + "," + b + ")";	
	
	//change text to rgb and hex values for our colors
	document.getElementById('HEX2').innerHTML = "0x" + r.toString(16).toUpperCase() + g.toString(16).toUpperCase() + b.toString(16).toUpperCase();
	document.getElementById('RGB2').innerHTML = "RGB " + r + " " + g + " " + b;		
	
	//set background colors	and create gradient
	setBackgroundGradient('bgimg', left, right);
	setBackgroundColor('rightsquare', right);
	
}

//picks a random number in the range of y to (x+y)
function randomColor(x, y) 
{			
	return Math.floor((Math.random() * x) + y);				
}	

window.wallpaperPropertyListener = 
{
    applyUserProperties: function(properties) 
	{

        // Read custom color
        if (properties.leftbox) 
		{
            // Convert the custom color to be applied as a CSS style
            var customColor = properties.leftbox.value.split(' ');
            customColor = customColor.map(function(c) 
			{
                return Math.ceil(c * 255);
            });
            left = 'rgb(' + customColor + ')';
			
			setBackgroundGradient('bgimg', left, right);
			setBackgroundColor('leftsquare', left);
        }
		
		if (properties.rightbox) 
		{
            // Convert the custom color to be applied as a CSS style
            var customColor = properties.rightbox.value.split(' ');
            customColor = customColor.map(function(c) 
			{
                return Math.ceil(c * 255);
            });
            right = 'rgb(' + customColor + ')';
			
			setBackgroundGradient('bgimg', left, right);
			setBackgroundColor('rightsquare', right);
        }


        // Read custom boolean
        if (properties.cycle) 
		{
            cycle = properties.cycle.value;			
        }
    }
};

			