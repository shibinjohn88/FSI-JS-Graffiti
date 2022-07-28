
// Select some elements...

let header = document.querySelector("#page-header")
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = "rotate(180deg)"
}


let dogNames = document.querySelector(".dog-name")
dogNames.style.textAlign = "left"

let footer = document.querySelector(".footer")
footer.style.color ="#A02B2B"

