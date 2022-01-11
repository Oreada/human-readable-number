module.exports = function toReadable(number) {

	const digits = ['zero ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
	const fromTenToNineteen = ['ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
	const fromTwentyToNinety = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
	const hundred = 'hundred ';

	let result = '';

	if (number === 0) {
		return 'zero';
	};

	if (number > 999) {
		return "The number > 999 is not available";
	};

	if (number > 99) {
		result += digits[Math.floor(number / 100)] + hundred;
		number = number % 100;  //! если число не имеет десятков и единиц, то тут для него всё закончится
	};

	if (number > 19) {
		result += fromTwentyToNinety[Math.floor(number / 10)];
		number = number % 10;  //! если число оканчивается на ноль, то тут для него всё закончится
	};

	if (number > 9) {
		result += fromTenToNineteen[number % 10];
		return result.trim();
	};

	if (number > 0) {
		result += digits[number];
	};

	return result.trim();
}
