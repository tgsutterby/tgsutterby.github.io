    var target;
    var text_input;
    var guess;
    var finished = false;
    var guesses = 0;

function play_game() {
    var random_number = Math.random() * 100;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer + 1;
    
    while (!finished) {
        text_input = prompt("I am thinking of a number in the range of 1 to 100.\n\n" +                            "What is the number?");
        guess = parseInt(text_input);
        guesses += 1;
        finished = check_guess();
    }
}

function check_guess() {
    if (isNaN(guess)) {
        alert("The text you entered is not a number.\n\n" +
              "Please enter an integer number in the range 1 to 100.");
        return false;
    }
    if ((guess < 1) || (guess > 100)) {
        alert("Please enter an integer number in the range 1 to 100.");
        return false;
    }
    if (guess > target) {
        alert("That number is too large, guess again!");
        return false;
    }
    if (guess < target) {
        alert("That number is too small, guess again!");
        return false;
    }
    alert("You guessed it! The number was " + target + 
          ".\n\nIt took you " + guesses + " tries to guess it.");
    return true;
}
