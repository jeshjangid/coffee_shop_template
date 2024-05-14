function myNav() {
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = () => {
        if (nav.style.left == "0%") {
            nav.style.left = "-100%";
            bar.src = "pic/menu.png"
        } else {
            nav.style.left = "0%";
            bar.src = "pic/x.png"
        }
    }
}
myNav();

window.onload = () => {
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}



const all = document.getElementById('all')
const coffee = document.getElementById('coffee')
const machines = document.getElementById('machines')
const sweets = document.getElementById('sweets')

const coffee_item = document.querySelectorAll('.coffee')
const machines_item = document.querySelectorAll('.machines')
const sweets_item = document.querySelectorAll('.sweets')


all.addEventListener('click', () => {
    all.style.color = '#c7a17a'
    coffee.style.color = '#fff'
    machines.style.color = '#fff'
    sweets.style.color = '#fff'
    coffee_item.forEach(item => {
        item.style.display = 'block'
    })
    machines_item.forEach(item => {
        item.style.display = 'block'
    })
    sweets_item.forEach(item => {
        item.style.display = 'block'
    })
})
coffee.addEventListener('click', () => {
    all.style.color = '#fff'
    coffee.style.color = '#c7a17a'
    machines.style.color = '#fff'
    sweets.style.color = '#fff'
    coffee_item.forEach(item => {
        item.style.display = 'block'
    })
    machines_item.forEach(item => {
        item.style.display = 'none'
    })
    sweets_item.forEach(item => {
        item.style.display = 'none'
    })
})
machines.addEventListener('click', () => {
    all.style.color = '#fff'
    coffee.style.color = '#fff'
    machines.style.color = '#c7a17a'
    sweets.style.color = '#fff'
    coffee_item.forEach(item => {
        item.style.display = 'none'
    })
    machines_item.forEach(item => {
        item.style.display = 'block'
    })
    sweets_item.forEach(item => {
        item.style.display = 'none'
    })
})
sweets.addEventListener('click', () => {
    all.style.color = '#fff'
    coffee.style.color = '#fff'
    machines.style.color = '#fff'
    sweets.style.color = '#c7a17a'
    coffee_item.forEach(item => {
        item.style.display = 'none'
    })
    machines_item.forEach(item => {
        item.style.display = 'none'
    })
    sweets_item.forEach(item => {
        item.style.display = 'block'
    })

})