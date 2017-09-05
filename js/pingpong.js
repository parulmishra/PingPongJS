//constructor
function Calculator(skinName)
{
	this.skin = skinName;
}
//we will make a prototype function named pingPong, so that variables inside pingpong can use Calculator.

Calculator.prototype.pingPong = function(goal)
{
	var output = [];
	for(var i=0; i<=goal; i++)
	{
		if(i % 15 == 0)
		{
			output.push("pingpong");
		}
		else if(i % 3 == 0)
		{
			output.push("ping");
		}
		else if(i % 5 == 0)
		{
			output.push("pong");	
		}
		else
		{
			output.push(i);
		}
	}
	return output;
}	
exports.calculatorModule = Calculator;