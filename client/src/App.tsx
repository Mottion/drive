import Routes from "./routes"
import "./globalStyles/globalStyles.css"
import { AuthProvider } from "./contexts/AuthContext"
import { ServerProvider } from "./contexts/ServerContext"
import { CookiesProvider } from "react-cookie"

function App() {

  return (
    <AuthProvider>
      <CookiesProvider>
        <ServerProvider>
          <Routes/>
        </ServerProvider>
      </CookiesProvider>
    </AuthProvider>
  )
}

export default App
