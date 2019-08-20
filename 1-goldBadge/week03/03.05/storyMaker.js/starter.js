
var customName; // This is the name that may or may not be entered in the text field
var randomize  // this is what will trigger the event to randomize a story
var story // This is where the story will go when its finished

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}
//This function returns a random value from a function

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
//This is the original story string. DO NOT edit this directly, and no string interpolation


let insertX =["Willy the Goblin","Big Daddy","Father Christmas"]
let insertY =["the soup kitchen","Disneyland","the White House"]
let insertZ = ["spontaneously combusted", "melted into a puddle", "turned into a slug and crawled away"]
//These are the random parts of the story to choose from

randomize.addEventListener('click'); 
//We seem to be missing what will this event trigger

function result(){
    // what name can be important in this function? 
    var name
    //Where does newStory come from? 
    let newStory ;

    //what are these?? 
    let xitem
    let yitem
    let zitem
    
    //What do we need newStory again for??
    newStory

    //IF there is no custom name, what happens
    if(customName.value !== ""){
        newStory 
    }

    //we will need some formulas to do these conversions celcius and stones
    if(document.getElementById("uk").checked) {
        var weight = Math.round(300);
        
        var temperature =  Math.round(94);
        
      }

      story.textContent = newStory;
      story.style.visibility = 'visible';
    
}