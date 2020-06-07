const toggleSwitch = document.querySelector('.checkbox');
const toggleLabel = document.querySelector('label');
const bg = document.querySelector('body');
const pageHeading = document.querySelector('.page-heading h1');
const otherHeading1 = document.querySelector('h2');
const otherHeading2 = document.querySelector('h3');
const upperBody = document.querySelector('header');
const mainCards = document.querySelectorAll('.top-cards');
const middleCards = document.querySelectorAll('.middle-cards');
const bottomCards = document.querySelectorAll('.bottom-cards');
const userText = document.querySelectorAll('.user-txt');
const mainNumbers = document.querySelectorAll('.main-numbers');
const bottomNumbers = document.querySelectorAll('.bottom-numbers');
const bottomText = document.querySelectorAll('.bottom-text');
const footerText = document.querySelector('.attribution');
const desc = document.querySelectorAll('.desc');


toggleSwitch.addEventListener('click', () => {
   //Dark Mode
   if(toggleSwitch.checked) {
      bg.style.backgroundColor = '#171924';
      upperBody.style.backgroundColor = '#1A1D2B';
      pageHeading.style.color = '#fff';
      otherHeading1.style.color = '#fff';
      otherHeading2.style.color = '#8D9AC7';
      footerText.style.color = '#8D9AC7';
      for (let i = 0; i < 4; i++) {
         mainCards[i].style.backgroundColor = '#202640';
         // Main Cards Hover Effect
         mainCards[i].addEventListener('mouseover', function() {
            mainCards[i].style.backgroundColor = '#2F3755';
         });
         mainCards[i].addEventListener('mouseout', function() {
            mainCards[i].style.backgroundColor = '#202640';
         });
         
         middleCards[i].style.backgroundColor = '#202640';
         // Middle Cards Hover Effect
         middleCards[i].addEventListener('mouseover', function() {
            middleCards[i].style.backgroundColor = '#2F3755';
         });
         middleCards[i].addEventListener('mouseout', function() {
            middleCards[i].style.backgroundColor = '#202640';
         });
        
         bottomCards[i].style.backgroundColor = '#202640';
         // Bottom Cards Hover Effect
         bottomCards[i].addEventListener('mouseover', function() {
            bottomCards[i].style.backgroundColor = '#2F3755';
         });
         bottomCards[i].addEventListener('mouseout', function() {
            bottomCards[i].style.backgroundColor = '#202640';
         });

         userText[i].style.color = '#8D9AC7';
         mainNumbers[i].style.color = '#fff';
         desc[i].style.color = '#8D9AC7';
       };
      for (let i = 0; 1 < 8; i++) {
         bottomNumbers[i].style.color = '#fff';
         bottomText[i].style.color = '#8D9AC7';
      };
      
   //Light Mode
   } else {
      bg.style.backgroundColor = '#fff';
      upperBody.style.backgroundColor = '#F8FAFF';
      pageHeading.style.color = '#171924';
      otherHeading1.style.color = '#63687E';
      otherHeading2.style.color = '#63687E';
      footerText.style.color = '#63687E';
      for (let i = 0; i < 4; i++) {
         mainCards[i].style.backgroundColor = '#F2F4FA';
         // Main Cards Hover Effect
         mainCards[i].addEventListener('mouseover', function() {
            mainCards[i].style.backgroundColor = '#E2E5F0';
         });
         mainCards[i].addEventListener('mouseout', function() {
            mainCards[i].style.backgroundColor = '#F2F4FA';
         });

         middleCards[i].style.backgroundColor = '#F2F4FA';
         // Middle Cards Hover Effect
         middleCards[i].addEventListener('mouseover', function() {
            middleCards[i].style.backgroundColor = '#E2E5F0';
         });
         middleCards[i].addEventListener('mouseout', function() {
            middleCards[i].style.backgroundColor = '#F2F4FA';
         });

         bottomCards[i].style.backgroundColor = '#F2F4FA';
         // Bottom Cards Hover Effect
         bottomCards[i].addEventListener('mouseover', function() {
            bottomCards[i].style.backgroundColor = '#E2E5F0';
         });
         bottomCards[i].addEventListener('mouseout', function() {
            bottomCards[i].style.backgroundColor = '#F2F4FA';
         });

         userText[i].style.color = '#63687E';
         mainNumbers[i].style.color = '#171924';
         desc[i].style.color = '#63687E';
       };
      for (let i = 0; 1 < 8; i++) {
         bottomNumbers[i].style.color = '#171924';
         bottomText[i].style.color = '#63687E';
      };
   }
});