// TODO: Define constants for the form and the result display area
const formData = document.getElementById("forma")
const resultData = document.getElementById("check")

// TODO: Add the first line of the event listener to handle form submission


formData.addEventListener("submit", function(){
    let inp = Number(document.getElementById("entered").value)
    let text = ""

        event.preventDefault();
        
    if(inp % 3 == 0 || inp % 5 == 0) {
        if(inp % 3 == 0) {
            text += "Fizz";
        }
        if(inp % 5 == 0) {
            text += "Buzz";
        }
    } else {
        text += inp;
    }
    result.textContent = text;
    
})
    // Prevent the form from refreshing the page


// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page

