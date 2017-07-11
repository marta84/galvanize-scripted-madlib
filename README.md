```
  ________       .__                      .__                  ____      _________            .__        __ ___________    .___
 /  _____/_____  |  |___  _______    ____ |__|_______ ____    /  _ \    /   _____/ ___________|__|______/  |\_   _____/  __| _/
/   \  ___\__  \ |  |\  \/ /\__  \  /    \|  \___   // __ \   >  _ </\  \_____  \_/ ___\_  __ \  \____ \   __\    __)_  / __ | 
\    \_\  \/ __ \|  |_\   /  / __ \|   |  \  |/    /\  ___/  /  <_\ \/  /        \  \___|  | \/  |  |_> >  | |        \/ /_/ | 
 \______  (____  /____/\_/  (____  /___|  /__/_____ \\___  > \_____\ \ /_______  /\___  >__|  |__|   __/|__|/_______  /\____ | 
        \/     \/                \/     \/         \/    \/         \/         \/     \/         |__|               \/      \/ 
```

By the end of today's exercise you will be able to:

1) Access values from `input` tags on a webpage using jQuery

and

2) Save a return value of a function and render it on a webpage

## Your Task:

You are given the skeleton of a simple Madlib webpage. There is already "hard coded" data in the JavaScript file
so that clicking the button on the page will always show the same answers to the Madlib in your JavaScript console. Boring!!! Your job is to 
make this webpage "dynamic" using JavaScript. This means you will need to capture values and put the "returnString" on the page. 

To do this, you will need to use jQuery to target the input tags provided in the HTML file and extract their values. 
This starts off easy by just getting the value from a couple of regular `input` tags of type text. However, next you'll need to 
extract the value of an `option` tag. Then, after obtaining the value of the `input` tag with type number, you will run the
number through a function to convert that number into "modifier" words describing on how high or how low the number is. The function
should use an `if/else` statement to determine what words you should use to describe how many lines of code you can now write.

For example:

    if your user inputs between 0 and 50:
        you will return the string "a few"
    but if your user inputs between 51 and 200:
        you will return the string "a lot"
    and if they input a number higher than 200:
        you will return the string "a TON" from the function

You finish off with just extracting another value from an `input` tag of type text.

If everything is done correctly, after you click the button you will have a coherent paragraph describing your day at Galvanize!

Here are the slides to help you if you need them: [Slides!](https://docs.google.com/presentation/d/1dIux1DaFQK-i_3cN3PHu5Azv6j6FfCnBCBHFKx8V684/edit?usp=sharing)


### A few tips:

* If you don't know where to start, first get the "returnString" variable to appear on the screen when the button is clicked.
* Work on one input at a time. Keep the "hard coded" values in place until you are ready to work on the input that corresponds with that variable.
* Check the slides for help only after you've given a good effort on any given part. Everything you need will be in the slides but you are also always welcome to raise your hand and ask questions.
