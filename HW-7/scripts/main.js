var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title, image, description, author, imageYear)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageYear = imageYear;
    }

    toString()
    {
        return "[TITLE]: " + this.title + "---[DESCRIPTION]: " + this.description +
        "---[AUTHOR]: " + this.author + "---[IMAGE YEAR]: " + this.imageYear;
    }

    showImage()
    {
        //returns the text for the image for use in the HTML.
        return this.image;
    }

}

function initializeArray()
{
    //This sets up my objects to be displayed
    var myViewFinder = new ViewFinder("A really cute dog", "images/cute_dog.jpg", "My first pet looking up at me", "Aidan Okes", "2016");
    var myViewFinder1 = new ViewFinder("A game controller", "images/game_controller.jpg", "A classic controller shaped candy case", "Aidan Okes", "2015");
    var myViewFinder2 = new ViewFinder("A Persona 5 Image", "images/persona_5.jpg", "A image of the Persona 5 game's protagonist.", "ATLUS", "2016");
    var myViewFinder3 = new ViewFinder("A Spyro Reignited Image", "images/spyro.jpg", "A image showcasing the Spyro Reignited Trilogy game.", "Activision", "2018");
    var myViewFinder4 = new ViewFinder("A image of a sunset taken at GFCMSU", "images/Sunset.jpg", "An picture that I took of a sunset from my local college", "Aidan Okes", "2017");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}
function accessInformation()
{
    //This randomizes what object is displayed each time the button is pressed.
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length)
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("image").src = myViewFinderArray[randomNumber].showImage();
}
