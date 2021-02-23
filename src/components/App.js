import React from 'react'
import sum from '../helpers/sum'
import '../style.css'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1 className="red">Result for 2 + 2 will be: {sum(2, 2)}</h1>
            </div>
        )
    }
}

export default App