import React from 'react'
import "./SidebarOption.css"

function SidebarOption({Icon,title,number,Selected}) {
    return (
        <div className={`SidebarOption ${Selected &&'SidebarOption--active'}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>
                {number}
            </p>
        </div>
    )
}

export default SidebarOption
