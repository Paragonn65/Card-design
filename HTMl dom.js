let title = document.getElementById("title")
console.log(title)

let body = document.body

// create a div
let div = document.createElement('div')
// append the div to the body element
body.append(div)
// append the existing h2 element to the div
div.appendChild(title)

// create a p element
let p = document.createElement('p')

// append the p element to the div element
// add text content to the p element
p.innerText = "welcome to sigma class B"

div.appendChild(p)
console.log(div)
