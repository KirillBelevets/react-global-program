import React from "react"
import { render } from '@testing-library/react'

import SearchBar from '../../layout_components/SearchBar'

describe('App', () => {
    test('renders App snapshot', () => {
        const { asFragment } = render(<SearchBar/>)

        expect(asFragment(<SearchBar/>)).toMatchSnapshot()
    })
})
