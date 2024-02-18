import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <>
            {/* navbar */}
            <div className="navbar bg-slate-100">
                <nav className='flex justify-between  container py-3'>
                    <div className="logo uppercase font-semibold text-xl"> <span className=' text-brandRed'>Farmer's</span > Market</div>
                    <div className="navLinks flex gap-5">
                        <div className="hover:text-gray-400">
                            <Link to={"/"}>Dashboard</Link>
                        </div>
                        <div className="hover:text-gray-400"> <Link to={"/products"}>Products</Link></div>
                        <div className="hover:text-gray-400"> <Link to={"/product/abc"}>product abc</Link></div>
                    </div>
                </nav>
            </div>
        </>
    )
}
