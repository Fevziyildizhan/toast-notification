const btn = document.getElementById('btn')
const container = document.querySelector('.container')

btn.addEventListener('click',()=>{

    alertNotification()
})

function alertNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerHTML = 'Fevzi Paşa'

    container.appendChild(notif)

    setInterval(() => {
        notif.remove()
    }, 3000);
}