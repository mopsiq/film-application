'use strict';

const seatsInHall = {

  'date': {
      1: {

      }
  },

  'films': {
    'Batman': {
      reservedSets: [],
      reservedSetsUser: [],
    },
    'Green Tree': {
      reservedSets: [],
      reservedSetsUser: [],
    },
    'Gag': {
      reservedSets: [],
      reservedSetsUser: [],
    },
    'Agent K': {
      reservedSets: [],
      reservedSetsUser: [],
    },
    'Feed': {
      reservedSets: [],
      reservedSetsUser: [],
    },
  },

  'hall': {
    1: {
      reservedSets: [],
      reservedSetsUser: [],
    },
    2: {
      reservedSets: [],
      reservedSetsUser: [],
    },
    3: {
      reservedSets: [],
      reservedSetsUser: [],
    },
  }

};


document.addEventListener('DOMContentLoaded', () => {
  



});














// function fillingInCells(poster, object) {
//   let a = poster.children;
//   for(let i = 0; i < poster.children.length; i++) {
//     for(let j = 0; j < poster.children[i].children.length; j++) {
//       console.log(poster.children[i].children[j])
//     }
//   }

// }


// function fillingInCells(poster, object) {
//   let currentTable = 'table' + poster.getAttribute('data-value');
//   let blockInPlaces = poster.children[1];
//   let reservedCells = [];

//   console.log(object[currentTable].cells)
//   for(let i = 0; i < blockInPlaces.childElementCount; i++) {
//       let currentCell = blockInPlaces.children[i];

//       if(object[currentTable].cells.includes(i + 1)) {
//         currentCell.classList.add('active')
//       };

//       if(object[currentTable].reservedUser.includes(i + 1)) {
//         currentCell.classList.add('reserved')
//       }

//           currentCell.addEventListener('click', () => {

//             if(currentCell.classList.contains('active')) {
//               return false;
//             }

//             currentCell.classList.toggle('reserved')
//             if(currentCell.classList.contains('reserved')) {
//                 reservedCells.push(i + 1);
//                 // currentCell.classList.add('active')
//             } else {
//                 reservedCells.splice(reservedCells.indexOf(i + 1), 1);
//             };
//             console.log(reservedCells)
//           });

//   };

// function test(model, object, table) {
//   // for(let i = 0; i < model.length; i++) {
//   //   object[table].reservedUser.push(model[i])
//   // }
//   while(model.length !== 0) {
//     let i = 0;
//     object[table].reservedUser.push(model[i])
//     model.pop()
//     i++;
//   }
//   console.log(object[table].reservedUser)
//   console.log(model)
//   console.log(object[table])
// }








