var addButton = document.getElementById("bookContainer")

var popUpBox = document.getElementById("overLayPopUp")
var popUpOverLay = document.getElementById("overLayPopUpBox")

addButton.addEventListener("click", function () {
    popUpBox.style.display = "block"
    popUpOverLay.style.display = "block"

})

var buttonClose = document.getElementById("buttonClose")

buttonClose.addEventListener("click", function (event) {
    event.preventDefault()
    popUpBox.style.display = "none"
    popUpOverLay.style.display = "none"

})

var Container = document.getElementById("addBook")

var buttonAdd = document.getElementById("buttonAdd")

var bookTitleInput = document.getElementById("book_title_input")
var bookAutherInput = document.getElementById("book_auther_input")
var bookDescriptionInput = document.getElementById("book_description_input")

buttonAdd.addEventListener("click", function (event) {

    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class", "container")

    div.innerHTML = `<h2>${bookTitleInput.value}</h2>
    <h4>${bookAutherInput.value}</h4>
    <p>${bookDescriptionInput.value}</p>
    <button onclick="delet(event)">Delet</button>`

    Container.append(div)

    popUpBox.style.display = "none"
    popUpOverLay.style.display = "none"

})
function delet(event) {
    event.target.parentElement.remove()
}