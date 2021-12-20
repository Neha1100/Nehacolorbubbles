// Define color variables:

red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];

//change the numbers in the colors to change the colors

//red = [100, 10, 83];
//orange = [90, 10, 50];
//green = [95, 60, 60];
//blue = [245, 97, 25];
//purple = [290, 60, 10];


// Letters in the message will cycle through these colors:

letterColors = [red, orange, green, blue, purple];

// This variable controls the smallest distance at which a mouse will make the dots react
mouseResponseThreshold = 100;

// This variable controls how strongly the dots will try to return to their starting position
friction = 0.90;

// This variable controls how much the dots will rotate when interacting
rotationForce = 0.01;

// Change the value of the message variable to change the text on screen
// Change below the text between the quotation marks and run your code to see your name animated!

message = 'Welcome Neha Patel !';
drawName(message, letterColors);

//Change below the letters to blue only
//drawName(message, blue);

// The code below will allow you to interact with the letters

bounceBubbles();

