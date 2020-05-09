var myViewFinderArray = new Array();
var imageNumber = -1;
var rotation = ["transform:rotate(0deg);", "transform:rotate(90deg);", "transform:rotate(180deg);", "transform:rotate(270deg);"]
var amount = 0;

class ViewFinder
{
    constructor(name, image)
    {
        this.name = name;
        this.image = image;
    }

    toString()
    {
        return "[NAME]: " + this.name;
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
    var myViewFinder = new ViewFinder("Green Piece", "images/GreenPiece.png");
    var myViewFinder1 = new ViewFinder("Red Piece", "images/RedPiece.png");
    var myViewFinder2 = new ViewFinder("Line Piece", "images/LinePiece.png");
    var myViewFinder3 = new ViewFinder("T Block", "images/TBlock.png");
    var myViewFinder4 = new ViewFinder("Square Block", "images/SquareBlock.png");
    var myViewFinder5 = new ViewFinder("L Block (Left)", "images/LBlockLeft.png");
    var myViewFinder6 = new ViewFinder("L Block (Right)", "images/LBlockRight.png");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
    myViewFinderArray.push(myViewFinder5);
    myViewFinderArray.push(myViewFinder6);

}
function accessInformation()
{
    if (imageNumber < myViewFinderArray.length - 1) {
      imageNumber++;
    } else {
      imageNumber = 0;
    }
    document.getElementById("title").innerHTML = myViewFinderArray[imageNumber].toString();
    document.getElementById("image").src = myViewFinderArray[imageNumber].showImage();
}

function goBackward()
{
    if (imageNumber > 0) {
      imageNumber--;
    } else {
      imageNumber = myViewFinderArray.length - 1;
    }
    document.getElementById("title").innerHTML = myViewFinderArray[imageNumber].toString();
    document.getElementById("image").src = myViewFinderArray[imageNumber].showImage();
}

function rotateClockwise()
{
    if (amount < rotation.length - 1){
      amount++;
    } else {
      amount = 0;
    }
    document.getElementById("image").style = rotation[amount];
}

function rotateCounterClockwise()
{
    if (amount > 0){
      amount--;
    } else {
      amount = rotation.length - 1;
    }
    document.getElementById("image").style = rotation[amount];
}
