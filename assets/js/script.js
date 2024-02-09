const buttonSubmit = (e) => {
    e.preventDefault()
    try {        
    let a = document.getElementById("inputGroupSelect01")
    let b = document.getElementById("dollarAmount")
    let x = a.value
    let y = b.value

    console.log("Type of Account: " + x + ", Dollar Amount Input: " + y)    

    let answer = confirm("Success!! Add another?")
    
    if(!answer){
    window.location.href = "./index.html"
    } else if (answer) {
        b.value = ""
    }

    } catch (err) {
        console.error(err)
    }
}

const theButton = document.getElementById("primary-submit")

theButton.addEventListener('click', buttonSubmit)