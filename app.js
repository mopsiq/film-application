'use strict';

const selectInBlock = document.querySelectorAll('.block__select');
const blockInHall = document.querySelector('.block__hall');
const btnForBlock = document.querySelector('.block__button');
const seats = document.querySelectorAll('.seats');

const dateSelected = document.getElementById('date');
const timeSelected = document.getElementById('time');


let objectInDates = {

  dates: {
    0: '1',
    1: '2',
    2: '3',
    3: '4',
    4: '5',
    5: '6',
    6: '7',
  },

};

let users = {};
let reservedForUser = [];
let JSONInLocal;


function generateDate(object) {
  let newWeekDate = new Date(2021, 0, 25);
  // let currentDate = new Date();

  let size = Object.keys(object.dates).length;

  let month = newWeekDate.getMonth() + 1;
  month < 10 ? month = '0' + month : false;

  let dateInDay = newWeekDate.getDate();  
  let year = newWeekDate.getFullYear();


  for(let i = 0; i < size; i++) {
    object.dates[i] = `${year}:${month}:${dateInDay + i}`
  }

}
generateDate(objectInDates);


function checkingInReserv(seatsInBlock, localStore) {

  if(localStore !== null || undefined) {
    let parseLocal = JSON.parse(localStore);

    for(let i = 0; i < seatsInBlock.length; i++) {
      let seatsAttribute = +seatsInBlock[i].getAttribute('seat-value')
      seatsInBlock[i].classList.add('active');
        if(parseLocal.includes(seatsAttribute)) {
          seatsInBlock[i].classList.add('reserved');
          seatsInBlock[i].classList.remove('clicked')
        } else {
          seatsInBlock[i].classList.remove('reserved')
        }
    }
  }
    
};

function creatingObjectInSeats(object, date, time) {
    if(object.hasOwnProperty(date.value)) {
      object[date.value][time.value] = window.localStorage.getItem('localReserveds')
    } else {
      object[date.value] = new Object();
      object[date.value][time.value] = window.localStorage.getItem('localReserveds');
    }
     
};

function generateSeatsInRange(seatsBlock, object) {

  seatsBlock.forEach((item) => {
    
    item.classList.remove('reserved')
    item.classList.remove('clicked')

      if(object?.[dateSelected.value]?.[timeSelected.value]) {
        btnForBlock.setAttribute('disabled', 'disabled')
        let JSONParse = JSON.parse(object[dateSelected.value][timeSelected.value])
          if(JSONParse.includes(+item.getAttribute('seat-value'))) {
            item.classList.add('reserved')
          } else {
            item.classList.remove('reserved')
          }
      } else {
        btnForBlock.removeAttribute('disabled')
      };

  });

};



document.addEventListener('DOMContentLoaded', () => {

  for(let i = 1; i < dateSelected.childElementCount; i++) {
    dateSelected[i].textContent = objectInDates.dates[i - 1]
  };
  
  if(window.localStorage.getItem('localObject') !== null || undefined) {
    users = JSON.parse(window.localStorage.getItem('localObject'));
  };
  
  // localStorage.clear();
  console.log(users)

      selectInBlock.forEach((item) => {
        item.addEventListener('change', () => {
          generateSeatsInRange(seats, users)
        });
        item.addEventListener('click', () => {
          btnForBlock.classList.toggle('hidden')
        }) 
      });
    
      seats.forEach((item) => {
        item.classList.add('active')
        item.addEventListener('click', () => {
            let currentItem = +item.getAttribute('seat-value');
            item.classList.toggle('clicked');

              if(item.classList.contains('clicked')) {
                reservedForUser.push(currentItem);
              } else {
                reservedForUser.splice(reservedForUser.indexOf(currentItem), 1);
              };

            console.log(reservedForUser);
        });

      });


      btnForBlock.addEventListener('click', () => {
          JSONInLocal = JSON.stringify(reservedForUser);
          window.localStorage.setItem('localReserveds', JSONInLocal);

          checkingInReserv(seats, window.localStorage.getItem('localReserveds'));
          creatingObjectInSeats(users, dateSelected, timeSelected)

          window.localStorage.setItem('localObject', JSON.stringify(users, null, 2));
          console.log(window.localStorage.getItem('localObject'))
      });

});

