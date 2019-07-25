const searchBox=document.querySelector('input[name="search-box"]');
//focus on searchBox by default
searchBox.focus();
console.log({searchBox});
searchBox.addEventListener('input', (e) => {
  let searchTerm = e.target.value;
  console.log(searchTerm+".");
  let xhr=new XMLHttpRequest();
  //example search endpoint : /search?q=fluffyunicorn
  let searchUrl = `/search?q=${encodeURIComponent(searchTerm)}`
  console.log(searchUrl);
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200)
    {
      responseArray=JSON.parse(xhr.responseText);
      console.log(responseArray);
      populateSuggestionBox(responseArray)
    }
  };
  xhr.open ('GET', searchUrl, true);
  xhr.send();
})

const populateSuggestionBox=(suggestionsArray)=>{
    const UlElement=document.querySelector('.suggestions-box');
    UlElement.innerHTML="";
    suggestionsArray.forEach(suggestion=>{
      const liElement=document.createElement('li');
      liElement.classList.add('suggestion-item');
      liElement.textContent=suggestion;
      UlElement.appendChild(liElement);
      liElement.addEventListener('click',chooseSuggestion)
    })
}
const chooseSuggestion = (event)=>{
  const value=event.target.textContent;
  searchBox.value=value;
  console.log(value);
}