const btn = document.querySelector('.btn')
const messParent = document.getElementById('messages')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

btn.addEventListener('click', createNotification)

function createNotification(message = null, type = null) {
    const elem = document.createElement('div')
    elem.classList.add('message')

    let typeClass = getRandomType();
    elem.classList.add(typeClass)

    elem.innerText = getRandomMessage()

    messParent.appendChild(elem)

    setTimeout(() => {
        elem.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}