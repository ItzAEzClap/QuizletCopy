

function addItem() {

}

function removeItem() {

}


function init() {
    
}


const setName = document.getElementById('set-name')

setName.addEventListener('input', () => {
    if (setName.scrollWidth > setName.offsetWidth) {
        setName.value = setName.value.substring(0, setName.value.length - 1)
    }
})