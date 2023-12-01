function calculateExpression(): number {
    const result = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
  
    return result;
  }
  
  // Calculate and print result
  const expressionResult: number = calculateExpression();
  console.log("Result of the expression is:", expressionResult);
  