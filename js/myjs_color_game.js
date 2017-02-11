var target_number;
            var target_color;
            var colors_as_string;
            var text_input;
            var finished = false;
            var colors = new Array("Blue", "Brown", "Coral", "Cyan", "Fuchsia", "Green", "Lavendar", "Maroon", "Navy");
            var guesses = 0;
        
            function do_game() {
                var random_number = Math.floor(Math.random() * 9);
                target_number = random_number +1;
                target_color = colors[random_number];
                colors_as_string = colors.join(', ')
                
                while (!finished) {
                    text_input = prompt("I am thinking of a color in this list.\n\n" + colors_as_string +                            "\n\nWhat is the number?");
                    guesses += 1;
                    finished = check_guess();
                }
            }
            
            function check_guess() {
                
                var index = colors.indexOf(text_input);
                
                if (index == -1){
                    alert("Sorry, I don't recognize your entry, please try again.");
                    return false;
                }
                
                if (text_input > target_color) {
                    alert("Sorry, your guess is not correct!\n\n" + "Hint: Your color is alphabetically higher than mine.\n\n" + "Guess again.");
                    return false;
                }
                
                if (text_input < target_color) {
                    alert("Sorry, your guess is not correct!\n\n" + "Hint: Your color is alphabetically lower than mine.\n\n" + "Guess again.");
                    return false;                    
                }
                
                if (text_input == target_color) {
                document.body.style.background = target_color;
                alert("Congratulations, you got it!\n\n" + "It took you " + guesses + " tries to get it!\n\n" + "You can see the color in the background");
                return true;
                }
            }