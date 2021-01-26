'use strict';

console.log(window.localStorage)

const selectInBlock = document.querySelectorAll('.block__select');
const blockInHall = document.querySelector('.block__hall');
const btnForBlock = document.querySelector('.block__button');
const seats = document.querySelectorAll('.seats');

let reservedForUser = [];
let JSONInLocal;

const objectInDates = {

  dates: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
  },

};

function generateDate(object) {
  let newWeekDate = new Date();

  let size = Object.keys(object.dates).length;
  let month = newWeekDate.getMonth() + 1;
  let dateInDay = newWeekDate.getDate() - 4;
  let year = newWeekDate.getFullYear();

  for(let i = 0; i <= size; i++) {
    object.dates[i] = `${year}:0${month}:${dateInDay + i}`
  }

}
generateDate(objectInDates)


function checkingInReserv(seatsInBlock, localStore) {

      let parseLocal = JSON.parse(localStore);
      for(let i = 0; i < seatsInBlock.length; i++) {
        let a = +seatsInBlock[i].getAttribute('seat-value')
          if(parseLocal.includes(a)) {
            seatsInBlock[i].classList.add('reserved');
          } else {
            seatsInBlock[i].classList.remove('reserved')
          }
      }
    
};

function creatingObjectInSeats(array, mainObject) {
  // let secondarySeats = new Object();
  // for(let i = 0; i < array.length; i++) {
  //   secondarySeats[i] = array[i];
  // };
  // window.localStorage.getItem('localReserveds');
  // console.log(secondarySeats)
};



document.addEventListener('DOMContentLoaded', () => {

  checkingInReserv(seats, window.localStorage.getItem('localReserveds'));

      selectInBlock.forEach((item) => {

        if(item.getAttribute('name') === 'date') {
      
          for(let i = 0; i < item.childElementCount; i++) {
      
            if(item.children[i].getAttribute('value')) {
              item.children[i].textContent = objectInDates.dates[i - 1];
            };
      
          };
      
        };
      
      });
    
    seats.forEach((item) => {

      if(item.classList.contains('reserved')) {
        reservedForUser.push(+item.getAttribute('seat-value'))
      }

      item.addEventListener('click', () => {
          let currentItem = +item.getAttribute('seat-value');

          if(reservedForUser.length > 8) {
            console.log('Бронирование невозможно')
          } else {
            item.classList.toggle('clicked');

            if(item.classList.contains('clicked')) {
              reservedForUser.push(currentItem);
            } else {
              reservedForUser.splice(reservedForUser.indexOf(currentItem), 1);
            };
          }

          console.log(reservedForUser)
      });

    });



    btnForBlock.addEventListener('click', () => {
        JSONInLocal = JSON.stringify(reservedForUser);
        window.localStorage.setItem('localReserveds', JSONInLocal);
      // creatingObjectInSeats(reservedForUser, objectInDates)
    });

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








