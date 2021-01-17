'use strict';


const btnForBlock = document.querySelectorAll('.block__btn');
const modalForBlock = document.querySelectorAll('.block__modal');
const wrapper = document.querySelector('.wrapper');


btnForBlock.forEach(function(item) {
  
  item.addEventListener('click', (e) => {
    e.preventDefault();

    modalForBlock.forEach((currentModal) => {
        if(currentModal.getAttribute('data-value') === item.getAttribute('data-value')) {

          currentModal.classList.add('active');
          wrapper.classList.toggle('active');

            wrapper.addEventListener('click', () => {
              wrapper.classList.remove('active');
              currentModal.classList.remove('active');
            });

        };
    });
  

  });
  
});




