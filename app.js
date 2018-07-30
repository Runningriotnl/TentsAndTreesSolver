const inputElements = {
    createGrid : document.getElementById('create_grid'),
	inputWidth : document.getElementById('width'),
	inputLength : document.getElementById('length')
};



inputElements.createGrid.addEventListener('click', e => {
	e.preventDefault();
	const width = parseInt(inputElements.inputWidth.value);
	const length = parseInt(inputElements.inputLength.value);
	console.log(width);
});