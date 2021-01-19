'use strict';


const btnForBlock = document.querySelectorAll('.block__btn');
const modalForBlock = document.querySelectorAll('.block__modal');
const cellInTable = document.querySelectorAll('.block__cell');
const wrapper = document.querySelector('.wrapper');

let obj = {
 'table1': {
    cells: [1, 4, 12, 15, 19, 37, 38],
 },
 'table2': {
    cells: [2, 5, 7],
 },
};


btnForBlock.forEach(function(item) {
  
  item.addEventListener('click', (e) => {
    e.preventDefault();

    modalForBlock.forEach((currentModal) => {
        if(currentModal.getAttribute('data-value') === item.getAttribute('data-value')) {
            currentModal.classList.add('active');
            wrapper.classList.toggle('active');
            fillingInCells(currentModal, obj);

            wrapper.addEventListener('click', () => {
              wrapper.classList.remove('active');
              currentModal.classList.remove('active');
            });
        };
        
    });
  
  });
  
});

function fillingInCells(poster, object) {
  let currentTable = 'table' + poster.getAttribute('data-value');
  let blockInPlaces = poster.lastElementChild;
  let reservedCells = [];

  for(let i = 0; i < blockInPlaces.childElementCount; i++) {
      let currentCell = blockInPlaces.children[i];

      if(object[currentTable].cells.includes(i + 1)) {
        currentCell.classList.add('active')
      };

      currentCell.addEventListener('click', () => {

        if(currentCell.classList.contains('active')) {
          return false;
        }

        currentCell.classList.toggle('reservation')
        if(currentCell.classList.contains('reservation')) {
            reservedCells.push(i + 1);
        } else {
            reservedCells.splice(reservedCells.indexOf(i + 1), 1);
        };

      });

      
  };


};






