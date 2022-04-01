
// starter kit
import Accueil from '../component/dashboard/accueil'
import Live from '../component/dashboard/live'
import Support from '../component/dashboard/support'
import Parametre from '../component/dashboard/parametre'

export const routes = [
    { path:"/dashboard/accueil", Component: Accueil },    
    { path:"/dashboard/live", Component: Live }, 
    { path:"/dashboard/support", Component: Support },    
    { path:"/dashboard/parametre", Component: Parametre },
]