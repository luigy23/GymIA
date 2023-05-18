//importar estilos globales
import {Poppins} from 'next/font/google'
import '../styles/globals.css'
import { UserProvider } from '@/Context/UserContext'
import NavMenu from '@/Componentes/NavMenu'

const poppins = Poppins({subsets: ['latin'],
weight: ['300','400','500','600','700'],

}

)

export default function MyApp({ Component, pageProps }) {
    return (
      <main className={poppins.className}>
      <UserProvider>
        <NavMenu />
      <Component {...pageProps} />
      </UserProvider>
      </main>
    )
  }

