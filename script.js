$(document).ready(function() {
    $("#clickButton").on("click", function() {
    
        var hairColor = "red";
        var shirtColor = "yellow";
        var shoesColor = "green";
        var linesOfCode = 123;
        var linesOfCodeModifier = "foobar";
        var lessonLearned = "jQuery";
        
        /* 
            Write your function named "modifierFunc" here.

            The argument for this function should be named
            "lines". 

            Inside this function there should be an 
            if/else statement that returns different values
            depending on the value of the "lines" parameter.
            (See the directions in README.md for more info)

            You will need call the function by passing
            in the variable "linesOfCode" and then save the return 
            value in the variable named "linesOfCodeModifier"
            above. 
        */
    
        var returnString =      "I had a great time at Galvanize with Parker today but his look needs"
                            +   " some serious help! First off, he should dye his hair " + hairColor + "."
                            +   " He also really needs a " + shirtColor + " shirt to go with some " + shoesColor
                            +   " shoes. Aside from his outfit, he was a pretty good instructor. I was able " 
                            +   " to write " + linesOfCodeModifier + " more lines of code because of our review."
                            +   " After this time at Galvanize I will never forget " + lessonLearned + "!";
        
        console.log(returnString);
        
    }); 
});