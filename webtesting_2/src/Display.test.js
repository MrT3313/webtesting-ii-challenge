import React from 'react'
import ReactDOM from 'react-dom'
import { render, getByText } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import "jest-dom/extend-expect"

import Display from './Display.js'

describe("Display Tests", () => {
    it('Renders w/out crashing', () => {
        render(<Display />);
    })
    it('# of balls & Strikes', () => {
        const {getByText} = render(<Display />);
        getByText(/strikes:/i)
        getByText(/balls:/i)
    })
})