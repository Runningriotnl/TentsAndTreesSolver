const inputElements = {
    createGrid : document.getElementById('create_grid'),
    gridContainer : document.querySelector('.container'),
	inputWidth : document.getElementById('width'),
	inputLength : document.getElementById('length')
};



inputElements.createGrid.addEventListener('click', e => {
	e.preventDefault();
	const gridWidth = parseInt(inputElements.inputWidth.value);
	const gridLength = parseInt(inputElements.inputLength.value);
	console.log(width);
  const squareSize = (90 / gridWidth);
  console.log(squareSize);

	inputElements.gridContainer.innerHTML = '';
	for(var i = 0; i < gridLength+1; i++){
		for(var j = 0; j < gridWidth+1; j++){
			if(j === 0 && i === 0){
				inputElements.gridContainer.insertAdjacentHTML('beforeend',
				`<div class="no_border_square_top" width="${squareSize}%"
    padding-bottom="${squareSize}%">
    				<div class="corner">
    				</div>
    			</div>`);
    		} else if(i === 0){
    			inputElements.gridContainer.insertAdjacentHTML('beforeend',
    			`<div class="no_border_square_top">
    				<div class="numTents">
    					<p class="top_num_tents" ><input type="number"
       						min="0"
       						max="2"
       						step="1"
       						value="0"/>
       					</p>
    				</div>
    			</div>`);
    		} else if(j === 0 && i !== 0){
    			inputElements.gridContainer.insertAdjacentHTML('beforeend',
    				`<div class="no_border_square_front">
    					<div class="numTents">
    						<p class="front_num_tents"><input type="number"
       							min="0"
       							max="2"
       							step="1"
       							value="0"/>
       						</p>
    					</div>
    				</div>`);
    		} else {
          inputElements.gridContainer.insertAdjacentHTML('beforeend',
            `<div class="square">
              <div class="content">
              </div>
            </div>`);
        }


		}
	}

});