// getting all required elements 
const searchWrapper = document.querySelector(".search-input")
const inputBox = searchWrapper.querySelector("input")
const suggBox = searchWrapper.querySelector(".autocom-box")
const searchIcon = searchWrapper.querySelector(".icon")

inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = []
    if (userData) {
        emptyArray = suggestions.filter((data)=>{
            // filtering array value and user char to lowercase and return only those
            // words/sentc which are starts with user entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
        })
        emptyArray = emptyArray.map((data) =>{
            return data = '<li>'+ data +'</li>'
        })
        searchWrapper.classList.add("active")
        showSuggestions(emptyArray)
        let allList = suggBox.querySelectorAll("li")
        for (var i = 0; i < allList.length; i++) {
            // adding onclick  atribute to all li tag
            allList[i].setAttribute("onclick", "select(this)")
        }
    }else{
        searchWrapper.classList.remove("active")
    }
}

function select(element){
    let selectUserData = element.textContent;
    // set selected li to search input
    inputBox.value = selectUserData 
    searchWrapper.classList.remove("active")
    searchInGoogle(selectUserData)
}

searchIcon.onclick = ()=>{
    searchInGoogle(inputBox.value)
}

function showSuggestions(list){
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }else{
        listData = list.join('')
    }
    suggBox.innerHTML = listData;
}

function searchInGoogle(searchText) {
    let newLocation = "https://www.google.com/search?q=" + searchText;
    location.href = newLocation;
}