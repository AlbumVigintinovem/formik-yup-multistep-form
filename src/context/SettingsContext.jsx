import React, { createContext, useContext, useState } from 'react'

const SiteContext = createContext();
export const useSiteContext = () => useContext(SiteContext);

const SettingsContext = ({ children }) => {

    const fontUnits = ["px", "vh", "rem", "%"];
    const fontSizes = ["12", "24", "36", "48"];
    const inputRange = ["1", "100"];

    const [activeTab, setActiveTab] = useState(0);
    const [sidebarIsActive, setSidebarIsActive] = useState(true);

    const handleTabClicked = (tab) => {
        setActiveTab(tab);
    };

    const handleSidebarActive = () => {
        setSidebarIsActive(true);
    };

    const data = {
        fontUnits, fontSizes, inputRange, activeTab, sidebarIsActive, setActiveTab, setSidebarIsActive, handleTabClicked, handleSidebarActive
    }

    return (
        <SiteContext.Provider value={data} >
            {children}
        </SiteContext.Provider>
    )
}

export default SettingsContext;