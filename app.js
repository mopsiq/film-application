'use strict';

const selectInBlock = document.querySelectorAll('.block__select');
const blockInHall = document.querySelector('.block__hall');
const btnForBlock = document.querySelector('.block__button');
const seats = document.querySelectorAll('.seats');

const dateSelected = document.getElementById('date');
const timeSelected = document.getElementById('time');
console.log(dateSelected)

let objectInDates = {

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

let users = {};
let reservedForUser = [];

let JSONInLocal;
let testDate;


function generateDate(object) {
  let newWeekDate = new Date(2021, 0, 25);
  let currentDate = new Date();

  if(currentDate.getDay() === 1) {
    newWeekDate = new Date(currentDate);
  }

  let size = Object.keys(object.dates).length;

  let month = newWeekDate.getMonth() + 1;
  month < 10 ? month = '0' + month : false;

  let dateInDay = newWeekDate.getDate();
  let year = newWeekDate.getFullYear();


  for(let i = 0; i <= size; i++) {
    object.dates[i] = `${year}:${month}:${dateInDay + i}`
  }

}
generateDate(objectInDates);


function checkingInReserv(seatsInBlock, localStore) {

  if(localStore !== null || undefined) {
    let parseLocal = JSON.parse(localStore);

    for(let i = 0; i < seatsInBlock.length; i++) {
      let seatsAttribute = +seatsInBlock[i].getAttribute('seat-value')
        if(parseLocal.includes(seatsAttribute)) {
          seatsInBlock[i].classList.add('reserved');
          seatsInBlock[i].classList.remove('clicked')
        } else {
          seatsInBlock[i].classList.remove('reserved')
        }

        seatsInBlock[i].classList.add('active')
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

function generateSeatsInRange(currentSelect, seatsBlock, object) {

  seatsBlock.forEach((item) => {

    item.classList.remove('reserved')
    item.classList.remove('clicked')

    if(users?.[dateSelected.value]?.[timeSelected.value]) {
      let JSONParse = JSON.parse(users[dateSelected.value][timeSelected.value])

      if(JSONParse.includes(+item.getAttribute('seat-value'))) {
        item.classList.add('reserved')
      } else {
        item.classList.remove('reserved')
      }

    }
      
  })

}



document.addEventListener('DOMContentLoaded', () => {

  
  if(window.localStorage.getItem('localObject') !== null || undefined) {
    users = JSON.parse(window.localStorage.getItem('localObject'));
  }
  
  // localStorage.clear();
  console.log(users)
  // checkingInReserv(seats, window.localStorage.getItem('localReserveds'));

      selectInBlock.forEach((item) => {
        item.addEventListener('change', () => {
          generateSeatsInRange(item, seats, users)
        });

        if(item.getAttribute('name') === 'date') {
      
          for(let i = 0; i < item.childElementCount; i++) {
              item.children[i].textContent = objectInDates.dates[i - 1];
              item.children[0].textContent = 'Выбор даты'
          };
      
        };
      
      });
    
    seats.forEach((item) => {

      if(item.classList.contains('reserved')) {
        reservedForUser.push(+item.getAttribute('seat-value'))
        return false;
      }

      item.addEventListener('click', () => {
          let currentItem = +item.getAttribute('seat-value');

            if(reservedForUser.length >= 31) {
              console.log('Бронирование невозможно')
            } else {
              item.classList.toggle('clicked');

            if(item.classList.contains('clicked')) {
              reservedForUser.push(currentItem);
            } else {
              reservedForUser.splice(reservedForUser.indexOf(currentItem), 1);
            };

            if(reservedForUser.length === 0) {
              btnForBlock.setAttribute('disabled', 'disabled')
            } else {
              btnForBlock.removeAttribute('disabled')
            }
          }

          console.log(reservedForUser)
      });

    });



    btnForBlock.addEventListener('click', () => {
        JSONInLocal = JSON.stringify(reservedForUser);
        window.localStorage.setItem('localReserveds', JSONInLocal);

        checkingInReserv(seats, window.localStorage.getItem('localReserveds'));
        creatingObjectInSeats(users, selectInBlock[0], selectInBlock[1])

        window.localStorage.setItem('localObject', JSON.stringify(users, null, 2));
        console.log(window.localStorage.getItem('localObject'))
    });

});

