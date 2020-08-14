// ------------------------------------------------------------------------------------
// CONSTANTS
// ------------------------------------------------------------------------------------
const PLAY_DELAY = 2000; // in ms

// ------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------

// Function setElementVisible : hide or display the given element
// - param elementId : the ID of the element
// - param isVisible : if true, display element - oterwise hide it
var setElementVisible = (elementId, isVisible) => {
  var displayProperty = isVisible ? "block" : "none";
  document.querySelector("#" + elementId).style.display = displayProperty;
};

// Function setResultHtml :
// - param html : the THML  code for the resutl DIV
var setResultHtml = html => {
  var result = document.querySelector("#resultId");
  result.innerHTML = html;
};

// Function onPlayClicked :
var onPlayClicked = () => {
  // 1 Display the result
  setResultHtml("WAIT !");

  // 2. After 2000 ms...
  setTimeout(() => {
    // 2.1 Display the result
    setResultHtml("PLAYED !");

    //  2.2 Update buttons
    setElementVisible("playButtonId", false);
    setElementVisible("clearButtonId", true);
  }, PLAY_DELAY);
};

// Function onClearClicked :
var onClearClicked = () => {
  // 1 Display the result
  setResultHtml("CLEARED !");

  //  2 Update buttons
  setElementVisible("playButtonId", true);
  setElementVisible("clearButtonId", false);
};

// ------------------------------------------------------------------------------------
// MAIN PROGRAMM
// ------------------------------------------------------------------------------------

// 1. Hide the clear button
setElementVisible("clearButtonId", false);

// 2. Bind buttons to events
var playButton = document.querySelector("#playButtonId");
playButton.addEventListener("click", onPlayClicked);

var clearButton = document.querySelector("#clearButtonId");
clearButton.addEventListener("click", onClearClicked);
