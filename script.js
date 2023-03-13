function wait(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function validateAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve();
    } else {
      reject();
    }
  });
}

function extractNameAndCreateObject() {
  const name = document.getElementById("name").value;
  const newObj = { name };
  return newObj;
}

function showAlert(obj) {
  alert(`Welcome, ${obj.name}. You can vote.`);
}

function showError(obj) {
  alert(`Oh sorry ${obj.name}. You aren't old enough.`);
}

const form = document.querySelector("form");
form.addEventListener("submit", async event => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (!name || !age) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await wait(4000);
    await validateAge(age);
    const obj = extractNameAndCreateObject();
    showAlert(obj);
  } catch (error) {
    const obj = extractNameAndCreateObject();
    showError(obj);
  }
});
