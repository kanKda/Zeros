module.exports = function zeros(expression) {
	let numArr = expression.split('*');
	let factorialPair = {};

	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i].slice(-2) == '!!') {
			factorialPair[numArr[i] + '(' + i + ')'] = 2;
		} else {
		factorialPair[numArr[i] + '(' + i + ')'] = 1;
	}
}

	let twoCouter = 0;
	let fiveCounter = 0;

	for (num in factorialPair) {
		for (let i = parseInt(num); i > 0; i -= factorialPair[num]) {

			for (let j = i; j % 2 == 0; j /= 2) {
				twoCouter += 1;
			}
			for (let k = i; k % 5 == 0; k /= 5) {
				fiveCounter += 1;
			}
		}
	}
	return Math.min(twoCouter,fiveCounter)
}

