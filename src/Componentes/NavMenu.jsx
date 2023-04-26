//menu de navegacion para la aplicacion en next
import Link from 'next/link';
import estilo from '@/styles/navmenu.module.css'

const NavMenu = () => {


    
    return (
        <nav className={estilo.menuNav}>
            <ul>
                <li> <Link href="/Registro">Usuario</Link></li>
                <li> <Link href="/">Home</Link></li>
            </ul>

        </nav>
    );
    }

    export default NavMenu;