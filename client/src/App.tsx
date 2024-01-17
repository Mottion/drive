import Routes from "./routes"
import "./globalStyles/globalStyles.css"
import { AuthProvider } from "./contexts/AuthContext"
import { ServerProvider } from "./contexts/ServerContext"
import { CookiesProvider } from "react-cookie"
import { NotifyProvider } from "./contexts/NotifyContext"
import Notify from "./components/notify/Notify"

function App() {

  return (
    <AuthProvider>
      <CookiesProvider>
        <NotifyProvider>
          <ServerProvider>
            <Routes/>
            <Notify />
          </ServerProvider>
        </NotifyProvider>
      </CookiesProvider>
    </AuthProvider>
  )
}

export default App
