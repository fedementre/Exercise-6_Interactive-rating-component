

const ratings = document.querySelectorAll("input")
const submit = document.querySelector("[class='submit']")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")

ratings.forEach(ratings => {
    ratings.onclick = event=>{
        
        const ratingValue=ratings.value
        const paragraph = document.querySelector(".utent-rating")
        paragraph.innerHTML= `You selected ${ratingValue} out of 5`
        submit.onclick = event=>{
            box1.style.display= "none"
            box2.style.display="inline"
        
        }
    }
});




// submit.onclick = event=>{
//     box1.style.display="none"
//     box2.style.display="inline"

// }















