import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

const App = (children: ReactNode) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}

export default App