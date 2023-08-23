import { useLocation, useNavigate } from "react-router-dom"


export default function Header() {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const generateActiveLinkStyle = (useActive) => {
        let style = `cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent`;
        if(useActive) {
            style = `${style} text-black border-b-green-500`;
        }
        return style;
    }
    const pathRouteMatch = (path) => {
        const match = path === location.pathname;
        return generateActiveLinkStyle(match);
    } 
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Realtor Logo" className="h-5 cursor-pointer" onClick={() => navigate('/')}/>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className={pathRouteMatch('/')} onClick={() => navigate('/')}>Home</li>
                    <li className={pathRouteMatch('/offers')}onClick={() => navigate('/offers')} >Offers</li>
                    <li className={pathRouteMatch('/sign-in')}onClick={() => navigate('/sign-in')} >Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
