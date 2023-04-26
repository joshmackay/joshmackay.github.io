import {Outlet} from 'react-router-dom'
import Navigation from "./Navigation"
import MobileNavigation from './MobileNavigation'

const Layout = () => {
    return(
        <div className="app-layout sm:pl-14 h-full">
            
            <Navigation />
            <MobileNavigation />

            <div className="page h-full">
                
                <Outlet />
                
            </div>
        </div>
    )
}

export default Layout