import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'

export default function NotFound() {
    return (
        <Wrapper>
            <h1>Page Not Found</h1>
            <p>OOOPS! We're sorry, the page that you are requesting does not exist, has been moved or has been deleted. Please refer to our <Link to='/'>home page.</Link></p>
        </Wrapper>
    )
}
