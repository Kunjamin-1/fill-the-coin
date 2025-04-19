let randomBtn = document.querySelector(".random-btn")
let heads = document.querySelector(".heads")
let tails = document.querySelector(".tails")
let heads_tails = document.querySelector(".heads-tails")
randomBtn.addEventListener("click", () => {
    if (!heads.classList.contains("rotation") && !heads.classList.contains("second-rotation") && !heads.classList.contains("display-none")) {
        heads.classList.add("rotation")
    } else if (heads.classList.contains("rotation") && !heads.classList.contains("display-none")) {
        heads.classList.add("second-rotation")
        heads.classList.remove("rotation")
    } else if (heads.classList.contains("second-rotation") && !heads.classList.contains("display-none")){
        heads.classList.remove("second-rotation")
        heads.classList.add("rotation")
    }
    if (!tails.classList.contains("rotation") && !tails.classList.contains("second-rotation") && !tails.classList.contains("display-none")) {
        tails.classList.add("rotation")
    } else if (tails.classList.contains("rotation") && !tails.classList.contains("display-none")) {
        tails.classList.add("second-rotation")
        tails.classList.remove("rotation")
    } else if (tails.classList.contains("second-rotation") && !tails.classList.contains("display-none")){
        tails.classList.remove("second-rotation")
        tails.classList.add("rotation")
    }
    setTimeout(() => {
        if(Math.random()<0.5){
            if(tails.classList.contains("second-rotation")) {
                tails.classList.remove("second-rotation")
            }
            else if(tails.classList.contains("rotation")) {
                tails.classList.remove("rotation")
            }
           heads.classList.remove("display-none")
               tails.classList.add("display-none")
            heads_tails.innerText = "heads"
            
        }else{
            if(heads.classList.contains("second-rotation")) {
                heads.classList.remove("second-rotation")
            }
            else if(heads.classList.contains("rotation")) {
                heads.classList.remove("rotation")
            }
            heads.classList.add("display-none")
            tails.classList.remove("display-none")
            heads_tails.innerText = "tails"
        }
    }, 1500);
})