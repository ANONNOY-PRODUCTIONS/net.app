// Create an input element
const inputElement = document.createElement('input')
inputElement.type = 'text' // Change type to "password"
inputElement.placeholder = 'code'

// Create a submit button
const submitButton = document.createElement('button')
submitButton.textContent = 'Submit'
submitButton.type = "seacrh"

// Get the container where you want to append the input and button
const inputContainer = document.getElementById('inputContainer')

// Append the input element and submit button to the container
inputContainer.appendChild(inputElement)
inputContainer.appendChild(submitButton)

// Add click event listener to the submit button
submitButton.addEventListener('click', function () {
  const inputValue = inputElement.value

  // Check if the input value is the correct password
  if (inputValue === 'google') {
    // Open Google in a new tab
    window.open('https://www.google.com/', '_blank')
  } else if (inputValue == 'github') {
    // Open VS Code using the appropriate file path (change it to match your actual path)
    window.open('https://github.com/')
  } else if (
    inputValue == 'youtube' ||
    inputValue == 'Youtube' ||
    inputValue == 'yt'
  ) {
    window.open('https://www.youtube.com/')
  } else if(inputValue == "Chatgpt"||inputValue == "GPT"||inputValue=='gpt'||inputValue=='ai'||inputValue=='AI'){
    window.open("https://chat.openai.com")
  } else if (inputValue == "Ds"||inputValue=='ds'){
    window.open('https://www.thedailystar.net/')
  } else if (inputValue == 'wikipedia' || inputValue == "wp"){
    window.open("https://en.wikipedia.org/wiki/Main_Page")
  } else if (inputValue == "docs"||inputValue == "googledocs" || inputValue == "google docs"){
    window.open("https://docs.google.com/document")
  } else if (inputValue == "sheets" || inputValue == "googlesheets" || inputValue == "google sheets" || inputValue == "exel"){
    window.open("https://docs.google.com/spreadsheets")
  }else if (inputValue == "yandex"){
    window.open("https://yandex.com")
  }else if (inputValue == "amazon") {
    window.open("https://www.amazon.com")
  }else if(inputValue == "bing" || inputValue == "microsoftbing" || inputValue == "microsoft bing"){
    window.open('https://www.bing.com')
  }else if (inputValue == "whatsapp" || inputValue == "whats app"){
    window.open('https://www.whatsapp.com/')
  }else if(inputValue == "finance") {
    window.open("https://www.google.com/finance/?authuser=0")
  }else if (inputValue == "slides") {
    window.open("https://docs.google.com/presentation/u/0/")
  }else if (inputValue == "microsoft") {
    window.open("https://www.microsoft365.com/?auth=1")
  }else if(inputValue == "codepen"){
    window.open("https://codepen.io/")
  }else if(inputValue == "icon") {
    window.open("https://tabler-icons.io/")
  }else if(inputValue == "fonts") {
    window.open("https://fonts.google.com/")
  }else if (inputValue == 'gmail') {
    window.open('https://mail.google.com/mail/u/0/#inbox')
  }else if (inputValue == 'chaldal') {
    window.open("https://chaldal.com")
  }else if (inputValue == "maps") {
    window.open("https://www.google.com/maps?authuser=0")
  }else if (inputValue == "forms") {
    window.open("https://docs.google.com/forms/u/0/")
  }else if (inputValue == 'translator') {
    window.open("https://translate.google.com/")
  }else if (inputValue == 'drive') {
    window.open("https://drive.google.com/drive")
  }else if (inputValue == "password") {
    window.open('https://passwords.google.com/?utm_source=OGB&utm_medium=AL')
  }else if (inputValue == "googlenews") {
    window.open("https://news.google.com/home?hl=en-US&gl=US&ceid=US:en")
  }else if (inputValue == "apps") {
    window.open("https://about.google/products/#all-products")
  }else if (inputValue == "") {
    window.open("code.pdf")
  }else if (inputValue == "podcuts") {
    window.open("https://podcasts.google.com/")
  }
  else {
    // Show an alert for incorrect password
    alert('Incorrect code. Please try again.')
  }
})