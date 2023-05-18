//menu de navegacion para la aplicacion en next
import Link from 'next/link';
import estilo from '@/styles/navmenu.module.css'

const NavMenu = () => {


    
    return (
        <nav className={estilo.menuNav}>
            <ul>
                <li> <Link href="/">Home</Link></li>
                <li> <Link href="/Registro">Registro</Link></li>
                <li> <Link href="/usuario">Usuario</Link></li>
                <li> <Link href="/chat">Chat</Link></li>
            </ul>

        </nav>
    );
    }

    export default NavMenu;