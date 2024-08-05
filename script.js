//your JS code here. If required.

return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterEvenNumbers(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = array.filter(num => num % 2 === 0);
      document.getElementById('output').textContent = evenNumbers.join(', ');
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbersByTwo(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = array.map(num => num * 2);
      document.getElementById('output').textContent = multipliedNumbers.join(', ');
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Main execution
getArray()
  .then(filterEvenNumbers)
  .then(multiplyEvenNumbersByTwo);
