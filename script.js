const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeLabel = document.querySelector("span.typesize-label")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightLabel = document.querySelector("span.fontweight-label")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightLabel = document.querySelector("span.lineheight-label")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTags = document.querySelectorAll(`select[name="typeface"]`)

const colorTags = document.querySelectorAll("div.colors div")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

const sidebar = document.querySelector("section.options")

// when type in sentenceTag, update outputTag accordingly
// if there's no value, we keep the original text

sentenceTag.addEventListener("keyup", function(){
    outputTag.innerHTML = this.value
    if(this.value){
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

// when type output tag, update sentence tag too

outputTag.addEventListener("keyup", function(){
    sentenceTag.value = this.value
})

// when change type size slider, update label
// change output tag font size

typesizeTag.addEventListener("input", function(){
    outputTag.style.fontSize =this.value + "px"
    typesizeLabel.innerHTML = "[ " + this.value + "px" + " ]"
})

// when change line height slider, update label

lineheightTag.addEventListener("input", function(){
    outputTag.style.lineHeight = this.value
    lineheightLabel.innerHTML = "[ " + this.value + " ]"
})

// change weight with slider

fontweightTag.addEventListener("input", function(){
    outputTag.style.fontWeight = this.value
    fontweightLabel.innerHTML = "[ " + this.value + " ]"
})


// change italic checkbox, change to italic and back to regular

italicTag.addEventListener("change", function(){
    if(this.checked){
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})

// udpate font family when changing selection

typefaceTags.forEach(typefaceTag => {
    typefaceTag.addEventListener("input", function(){
        outputTag.style.fontFamily = this.value
    })
});

// go through color tags, if click - change background and text color

colorTags.forEach(tag => {
    tag.addEventListener("click", function(){
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color
        outputTag.style.borderColor = this.style.borderColor

        sidebar.style.backgroundColor = this.style.backgroundColor
        sidebar.style.color = this.style.color
        sidebar.style.borderColor = this.style.borderColor

        italicTag.style.borderColor = this.style.borderColor
        
        // reset class
        colorTags.forEach(tag => {
            tag.classList.remove("selected")
        })
        // only add class to the clicked one
        this.classList.add("selected")
    }) 
})