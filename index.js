//create a random page
//input a number from user
//check the number if greater than print greater, less than less
//if equal -> finish game
//count guess

let guess_count = 0;
let random_number = Math.floor(Math.random() * 100);
console.log("random number:" + random_number);

document.querySelector("#check_it").addEventListener("click", function () {
    
    let input_number = document.querySelector("#nr_game");
    let answerLabel = document.querySelector("#answer");
    let countLabel= document.querySelector("#count_it")

    console.log("input number: " + input_number.value);


    if (random_number == input_number.value) {
        alert("You've won! Guess count:" + ++guess_count);
        

        const choice = confirm("Again?");
        if(choice){
            guess_count = 0;
            random_number = Math.floor(Math.random() * 100);
            console.log("random number:" + random_number);
            answerLabel.innerText = "";
            countLabel.innerText = "";
        }
        else{
            alert("Thanks for playing!");
            answerLabel.innerText = "";
            countLabel.innerText = "";
        }
        

    }
    else if (input_number.value == ""){
        answerLabel.innerText = "enter a number!";
    }
    else if(random_number > input_number.value){
        guess_count++;
        countLabel.innerText = `Guess count: ${guess_count}`;
        answerLabel.innerText = "number is greater than your guess"; 
    }
    else if(random_number < input_number.value){
        guess_count++;
        countLabel.innerText = `Guess count: ${guess_count}`;
        answerLabel.innerText = "number is less than your guess";
    }
    else if (isNaN(input_number.value)){
        answerLabel.innerText = "It's not a number!"
    }
    input_number.focus();
    input_number.value = "";
});

