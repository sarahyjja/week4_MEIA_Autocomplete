const searchBox = document.querySelector('input[name="search-box"]');
let suggestionsArray=[];
//counter to store position of highlighted item in list
let listNavCounter = -1;
//focus on searchBox by default
searchBox.focus();
console.log({ searchBox });

// react to change of searchBox value and make request
const changeValue = () => {
  let searchTerm = searchBox.value;
  console.log(searchTerm + ".");
  let xhr = new XMLHttpRequest();
  //example search endpoint : /search?q=fluffyunicorn
  let searchUrl = `/search?q=${encodeURIComponent(searchTerm)}`;
  console.log(searchUrl);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //populate suggestionsArray with parsed JSON response
      suggestionsArray = JSON.parse(xhr.responseText);
      console.log(suggestionsArray);
      //fill DOM with li elements created from suggestionsArray
      populateSuggestionBox();
    }
  };
  xhr.open("GET", searchUrl, true);
  xhr.send();
};
//when there is an input, change the value of searchTerm and make a new request inside changeValue
searchBox.addEventListener("input", changeValue);
//create li elements for each suggestion
const populateSuggestionBox = () => {
  const UlElement = document.querySelector(".suggestions-box");
  UlElement.innerHTML = "";
  suggestionsArray.forEach((suggestion, i) => {
    const liElement = document.createElement("li");
    liElement.classList.add("suggestion-item");
    liElement.textContent = suggestion;
    //adds highlight class to the element at the index decided by listNavCounter
    //this index changes when arrow keys are used for navigating and the UL is rerendered each time
    if(i===listNavCounter){
      liElement.classList.add('highlighted')
    }
    UlElement.appendChild(liElement);
    liElement.addEventListener("click", chooseSuggestion);
  });
};

// event handler for choosing a suggestion and updating value when clicked
const chooseSuggestion = event => {
  const value = event.target.textContent;
  searchBox.value = value;
  searchBox.focus();
  changeValue();
  console.log(value);
};

//callback to handle navigation keypresses(arrow keys).
//updates listNavCounter and calls populateSuggestionBox function to rerender suggestions list.
const navigateList= (e) =>{
  if(e.keyCode==40 && listNavCounter<suggestionsArray.length-1){
    listNavCounter+=1;
    populateSuggestionBox();
  }
  if(e.keyCode==38 && listNavCounter>-1){
    listNavCounter-=1;
    populateSuggestionBox();
  }
  if(e.keyCode==13 && listNavCounter!==-1){
    chooseSuggestion({target:document.querySelector('.highlighted')})
    listNavCounter=-1;
  }
}
//eventlistener for navigating search queries with keyboard
searchBox.addEventListener('keydown', navigateList)
