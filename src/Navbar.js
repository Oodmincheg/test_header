import React, { useState, useEffect} from 'react'

const Navbar = () => {

    const resizeWindowWidth = () => {
        if (window.innerWidth < 800) setHamburger(true)
        else setHamburger(false)
    }

    const [isHamburger, setHamburger] = useState(null)
    const [isOpenOnMobile, setIsOpenOnMobile] = useState(false)

    useEffect(() => {
        resizeWindowWidth()
        window.addEventListener('resize', resizeWindowWidth)
        return () => {
            window.removeEventListener('resize', resizeWindowWidth)
        }
    }, [])
    return (
        <>
        {(!isHamburger || isOpenOnMobile) ? <nav class="header_nav">
            <ul>
                <li className="close-button">
                    <a href="#"  onClick={() => setIsOpenOnMobile(false)}>Close</a>
                </li>
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
                <li>Create</li>
            </ul>
        </nav> : <div onClick={() => setIsOpenOnMobile(true)}><a href="#">Menu</a></div>}
        </>
    )
}

export default Navbar
