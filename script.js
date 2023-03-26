const form = document.querySelector('#myForm'); 
   const nameInput = document.querySelector('#name'); 
   const ageInput = document.querySelector('#age'); 
   const btn = document.querySelector('#btn'); 
  
   form.addEventListener('submit', (event) => { 
     event.preventDefault(); // Prevent form from submitting normally 
  
     if (nameInput.value === '' || ageInput.value === '') { 
       alert('Please fill out all fields.'); // Show validation error 
       return; 
     } 
  
     const age = parseInt(ageInput.value); 
  
     // Check if age is above 18 after 4 seconds 
     const promise = new Promise((resolve, reject) => { 
       setTimeout(() => { 
         if (age >= 18) { 
           resolve(); 
         } else { 
           reject(); 
         } 
       }, 4000); 
     }); 
  
     promise 
       .then(() => { 
         // Show welcome message if age is above 18 
         alert(`Welcome, ${nameInput.value}. You can vote.`); 
       }) 
       .catch(() => { 
         // Show rejection message if age is below 18 
         alert(`Oh sorry ${nameInput.value}. You aren't old enough.`); 
       }); 
   });