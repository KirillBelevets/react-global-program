import React from 'react'

const Header = (props) => {
    return (
        <header>
            <div className="display-flex content-justify-between">
                <div className="text-red logo">Netflix</div>
            {props.children}
            </div>
            <div className="header-overlay" />
        </header>
    )
}

export default Header