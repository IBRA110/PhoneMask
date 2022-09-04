function getInputNumbersValue(num) {
	
	num = getNumbers(num);
	let result = "";

	if (num.length == 0){
		return;
	}

	if (["7", "8", "9"].indexOf(num[0]) > -1) {
		if (num[0] == "9") {
			num = "7" + num;
		}	
		let firstSymbols = (num[0] == "8") ? "8" : "+7";
		result = firstSymbols + " ";
	
		if (num.length > 1) {
			result += "(" + num.substring(1, 4);
		}
		if (num.length >= 5) {
			result += ") " + num.substring(4, 7)
		}
		if (num.length >= 8) {
			result += "-" + num.substring(7, 9)
		}
		if (num.length >= 10) {
			result += "-" + num.substring(9, 11)
		}
	} else {
		result = "+" + num;
	}
	
	num = result;
	
	return num;
}
export function getNumbers(num) {
	num = num.replace(/\D/g, '');
	return num;
}
export function getMask(num) {
	
	num = getInputNumbersValue(num);
	return num;
}
