//importar estilos globales
import '../styles/globals.css'
import { UserProvider } from '@/Context/UserContext'
import NavMenu from '@/Componentes/NavMenu'

export default function MyApp({ Component, pageProps }) {
    return (
      <UserProvider>
        <NavMenu />
      <Component {...pageProps} />
      </UserProvider>
    )
  }

