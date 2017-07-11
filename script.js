$(document).ready(function() {
    $("#clickButton").on("click", function() {
    
        var hairColor = "red";
        var shirtColor = "yellow";
        var shoesColor = "green";
        var linesOfCode = 123;
        var linesOfCodeModifier = modifierFunc(linesOfCode);
        var lessonLearned = "jQuery"
        
        function modifierFunc(lines) {
            if(true){
                return "a TON";
            }
        }
    
        var returnString =      "I had a great time at Galvanize with Parker today but his look needs"
                            +   " some serious help! First off, he should dye his hair " + hairColor + "."
                            +   " He also really needs a " + shirtColor + " shirt to go with some " + shoesColor
                            +   " shoes. Aside from his outfit, he was a pretty good instructor. I was able " 
                            +   " to write " + linesOfCodeModifier + " more lines of code because of our review."
                            +   " After this time at Galvanize I will never forget " + lessonLearned + "!"
        
        console.log(returnString)
        
    });
    
    
});