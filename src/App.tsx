import { BrowserRouter } from "react-router-dom"
import RoutesComponent from "./routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
