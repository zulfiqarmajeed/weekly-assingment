function checkNumberStatus(number: number): string {
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  // Example usage
  const inputNumber: number = -8; // You can replace this with the actual number to check
  const result: string = checkNumberStatus(inputNumber);
  console.log(`The number ${inputNumber} is ${result}.`);
  