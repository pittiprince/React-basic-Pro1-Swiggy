export const NavBar = () => {
    return (
        <div className="w-full  ">
            <div id="MainContainer" className="flex justify-center">
                <div id="Nav-Container" className="flex justify-between w-1/2 p-5 ">
                    <div id="Logo">
                        <img src="/imgs/—Pngtree—food logo_8239825.png" alt="Food-Logo" className="w-16 m-3 hover:scale-110 hover:ease-in-out transition-all"/>
                    </div>
                    <div id="Quick-links" className="list-none flex gap-4 text-xl p-6  ">
                        <li className="hover:underline hover:ease-in-out hover:scale-110 transition-all hover:duration-200">Home</li>
                        <li className="hover:underline hover:ease-in-out hover:scale-110 transition-all hover:duration-200">Contact</li>
                        <li className="hover:underline hover:ease-in-out hover:scale-110 transition-all hover:duration-200">About us</li>
                        <li className="hover:underline hover:ease-in-out hover:scale-110 transition-all hover:duration-200">Cart</li>
                    </div>
                </div>
            </div>
        </div>
    )
}





