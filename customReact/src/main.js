

function customRender(reactElement, mainContainer){

    let element = document.createElement(reactElement.type);
    element.innerHTML= reactElement.children;

    for (const prop in reactElement.props){
        if (prop === 'children') continue;
        element.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(element);

}

const reactElement={
    type: 'a',
    props: {
        href: 'https://www.arslanshaukat.online/',
        'target': '_blank',
    },
    children: 'Vist Portfolio'
}



let mainContainer= document.querySelector('#root');

customRender(reactElement,mainContainer);