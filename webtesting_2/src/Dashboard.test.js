import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import 'jest-dom/extend-expect'
import Dashboard from './Dashboard'
import { isTSAnyKeyword } from '@babel/types';

it('renders without crashing', () => {
    render(<Dashboard />)
})