
function customRender(reactElement, Container){

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.childern
    domElement.setAttibute('href', reactElement.props.href)
    domElement.setAttibute('target', reactElement.props.target)

    Container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },

    childern : 'click me to visit'
}

const mainContainer = Document.querySelector('#root')

customRender(reactElement, mainContainer)