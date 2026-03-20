const circulo = document.getElementById("circulo")

circulo.addEventListener("click", function(event) {
    const num = document.createElement("p")
    num.classList.add("num")
    num.innerText = "1"

    const x = event.clientX
    const y = event.clientY - 30

    num.style.position = "absolute"
    num.style.left = x + "px"
    num.style.top = y + "px"

    setTimeout(() => {
        num.remove()
    }, 2000)

    circulo.append(num)
});