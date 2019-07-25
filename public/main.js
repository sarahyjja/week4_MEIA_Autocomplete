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
    }
  };
  xhr.open ('GET', searchUrl, true);
  xhr.send();
})
