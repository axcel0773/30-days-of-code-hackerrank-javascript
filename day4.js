/* 
    Task 
    Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter. The
    constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; if a negative argument
    is passed as initialAge, the constructor should set age to 0 and print Age is not valid, setting age to 0.. In addition, you must
    write the following instance methods:

    1. yearPasses() should increase the  instance variable by 1.
    2. amIOld() should perform the following conditional actions:
        If age < 13, print "You are young.".
        If age >= 13 and age < 18, print "You are a teenager.".
        Otherwise, print "You are old.".

    To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in
    the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it
    all quite yet!

    Input Format
    Input is handled for you by the stub code in the editor.
    The first line contains an integer, T(the number of test cases), and the T subsequent lines each contain an integer denoting the age 
    of a Person instance.

    Constraints
    1 <= T <= 4
    -5 <= age <= 30
*/

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  age = 0;
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
  } else age = initialAge;

  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    if (age < 13) {
      console.log("You are young.");
    } else if (age >= 13 && age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    age++;
  };
}
