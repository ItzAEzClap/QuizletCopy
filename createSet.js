const itemContainer = document.getElementById('item-container')


function switchTermDefinition() {
    for (const item of itemContainer.children) {
        item.insertBefore(item.lastChild, item.firstChild)
    }
}

function addItem() {
    let container = document.createElement('li')
    let term = document.createElement('textarea')
    let definition = document.createElement('textarea')
    
    container.className = 'text-item'
    term.className = 'text-term'
    definition.className = 'text-definition'
    term.placeholder = "Enter term"
    definition.placeholder = "Enter definition"

    container.appendChild(term)
    container.appendChild(definition)
    itemContainer.appendChild(container)
}

function removeItem() {

}


window.onload = () => {
    for (let i = 0; i < 6; i++) {
        addItem()
    }
}


const setName = document.getElementById('set-name')

setName.addEventListener('input', () => {
    if (setName.scrollWidth > setName.offsetWidth) {
        setName.value = setName.value.substring(0, setName.value.length - 1)
    }
})