import { createContext, useState } from 'react'
import Tab2 from '../components/TabsConents/Tab2';
import Tab3 from '../components/TabsConents/Tab3';
import Tab4 from '../components/TabsConents/Tab4';
import Tab5 from '../components/TabsConents/Tab5';

const TabSwitchContext = createContext();

const TabSwitcher = ({ children }) => {
    const [tabComponent, setTabComponent] = useState(
        <>
            <Tab2 />
            <Tab3 />
            <Tab4 />
            <Tab5 />
            {/* <Tab6 />
            <Tab7 />
            <Tab8 />
            <Tab9 /> */}
        </>
    );
    return (
        <TabSwitchContext.Provider value={{ tabComponent, setTabComponent }}>
            {children}
        </TabSwitchContext.Provider>
    )
}

export default TabSwitcher
export { TabSwitchContext }