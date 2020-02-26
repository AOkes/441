// Array for image names that have the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
// Variable for the blank image
var blankImagePath = "images/cardback.png";
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;

var player = {"firstname":"", "lastname":"", "age":0, "score":0};
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

    // Makes the second image appear
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];

    }
    else if(firstNumber < 0) // Makes the first image appear
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];

    }

    // Checks to see if the images do not match
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000); // Causes the images to disappear after 1000 ms, or 1 second.
    }
    // Checks to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;

        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "end-index.html";
        }
    }
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }


}
