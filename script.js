//your JS code here. If required.
 const form = document.querySelector('form');
      const ageInput = document.getElementById('age');
      const nameInput = document.getElementById('name');
      
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (!ageInput.value || !nameInput.value) {
          alert('Please enter both age and name');
          return;
        }
        
        const age = parseInt(ageInput.value);
        const name = nameInput.value;
        
        const promise1 = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (age >= 18) {
              resolve({ age, name });
            } else {
              reject({ age, name });
            }
          }, 4000);
        });
        
        promise1
          .then(({ age, name }) => {
            alert(`Welcome, ${name}. You can vote.`);
            return age;
          })
          .then((age) => {
            return { age };
          })
          .then((obj) => {
            alert(`New object: ${JSON.stringify(obj)}`);
          })
          .catch(({ age, name }) => {
            alert(`Oh sorry, ${name}. You aren't old enough.`);
          });
      });
