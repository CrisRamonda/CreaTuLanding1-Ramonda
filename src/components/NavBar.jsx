import CartWidget from "./CartWidget"

function NavBar() {
    return(
        <>
            <nav className="navbar">
                <ul>
                    <li><a href="">Framacia</a></li>
                    <li><a href="">Higiene</a></li>
                    <li><a href="">Entretenimiento</a></li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
        </>

    )
}

export default NavBar