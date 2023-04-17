let back = 1927
let next = 1928

let btnN = document.getElementById('next')
let btnB = document.getElementById('prev')
// window.addEventListener('load', () => {
//     // btnB.textContent = back
//     // btnN.textContent = next
// })
document.getElementById('next').onclick = function () {
    
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide').appendChild(lists[0])


    //sumar
    back = back + 1

    next = next + 1

}
document.getElementById('prev').onclick = function () {
    
    let lists = document.querySelectorAll('.item')
    let slide = document.getElementById('slide')
    slide.prepend(lists[lists.length - 1])

    //restar
    back = back - 1
    next = next - 1

    if (back < 1927) {
        
        back = 1927

        next = 1928
        slide.appendChild(lists[4])
    }
}