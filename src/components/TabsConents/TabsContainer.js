import React, { useContext } from 'react'
import { TabSwitchContext } from '../../context/TabSwitcher'

const TabsContainer = () => {

    const { tabComponent } = useContext(TabSwitchContext)

    return (
        <>
            <div className="tabbing-content">
                <p>Our Recent Work</p>
                <h2>What do you need <span className='boldtext'>designed</span>?</h2>
            </div>
            <div className="container">
                <div className="tab-content current">
                    <div className="tabbing-flex">
                        {tabComponent}
                    </div>
                </div>
            </div>

        </>
    )
}

export default TabsContainer
