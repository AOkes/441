// Array for image names that have the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
// Variable for the blank image
var blankImagePath = "images/cardback.png";
// Array for the real images
var actualImages = [];

function printBlanks()
{
   // Randomly distributes images
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
    //Sets the source for the images
        document.getElementById(imageTags[i]).src= blankImagePath;
    }



}

function createRandomImageArray()
{
    // Array of the real images.
    var actualImagePath = ["images/gaming.jpg", "images/kingdomhearts.jpg", "images/mario.jpg", "images/persona5.jpg", "images/spyro.jpg"];
    // Creates an array to track the amount of each image.
    var count = [0,0,0,0,0];
    // Checks to see if the length is fulfilled.
    while(actualImages.length < 10)
    {
        // Gives a random number for the images that can be chosen
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        /* Creates an if statement that says if the total number added is less than 2, then
        add the image to the actual image array.
        */
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // Adds one to the array that makes sure only two of the same image can be added.
            count[randomNumber] = count[randomNumber] + 1;
        }
    }





}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
        // this should be a quick function that just changes
        // the image based on what number was pressed


}
