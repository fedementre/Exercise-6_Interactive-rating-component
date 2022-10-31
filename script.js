

const ratings = document.querySelectorAll(".value-button")
const submit = document.querySelector("[class='button']")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")

ratings.forEach(ratings => {
    ratings.onclick = event=>{
        ratings.style.backgroundColor="hsl(25, 97%, 53%)"
        ratings.style.color="white"
        const ratingValue=ratings.textContent
        const paragraph = document.querySelector(".utent-rating")
        paragraph.innerHTML= `You selected ${ratingValue} out of 5`
    }
});


submit.onclick = event=>{
    box1.style.display="none"
    box2.style.display="inline"

}













