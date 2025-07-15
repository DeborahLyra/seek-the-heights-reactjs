import { AuthProvider } from "./contexts/AuthContext"
import { RouterComponent } from "./Router"


function App() {

  return (
    <AuthProvider>
      <RouterComponent />
    </AuthProvider>
   
  )
}

export default App
