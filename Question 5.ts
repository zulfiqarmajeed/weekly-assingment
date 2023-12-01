function check_Voting_Eligibility(age: number): string {
    if (age >= 18) {
      return "You are eligible to vote!";
    } else {
      return "Sorry, you are not eligible to vote yet.";
    }
  }
  
  // Example usage
  var person_Age: number = 14;
  
  // You can replace this with the actual age input
  var eligibility_Message: string = check_Voting_Eligibility(person_Age);
  console.log(eligibility_Message);
  