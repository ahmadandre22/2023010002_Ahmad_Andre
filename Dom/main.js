
document.title = 'samad'
const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = "Klik Saya 1"
btn1.textContent = defaultText

btn1.style.border ='none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'purple'

function clickButton() {
    btn1.style.background = 'green'
    const newText = document.createElement('p')
    newText.textContent = "HAI APA KABAR"
    body.append(newText)
}

function ubahText (){
   btn1.textContent = 'apa?'
}

function oriText(){
   btn1.textContent = defaultText
}