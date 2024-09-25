import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function DemoApp(){
    return(
        <div>
            <h1> Hello Customer </h1>
        </div>
    )
        
}

// Element 1
// const ReactElement = {
//     type: 'a',
//     props: {
//         href : 'https://google.com',
//         target: '_blank'
//     },

//     children : 'click me to visit'
// }

//Element 2
const AnotherElement  = (
    <a href='https://google.com' target='_blank'> visit google </a>
)


//Element3
const ReactElement = React.createElement(
    'a',
    {href : 'https://google.com', target: '_blank'},
    'CLICK ME TO VISIT'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App />
    // DemoApp()

    // <DemoApp />
    // ReactElement()
    // AnotherElement()

    ReactElement
  
)
