
function fibonacci(num) {
// your code here
	if(num-1<2)
	{
		return  num-1;
	}
	let feb1=0;
	let feb2=1;
	while(num-->2)
		{
			let temp=feb1+feb2;
			feb1=feb2;
			feb2=temp;
		}
	return feb2;
	
}

module.exports = fibonacci;
