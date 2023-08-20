import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Leftbar from "./Leftbar"
import Navbar from "./Navbar"
import Rightbar from "./Rightbar"

const Layout = ({ children }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#F6F3F5]">
        <Navbar />
        <div className="flex">
          <Leftbar />
          <div className="flex-[8]">{children}</div>
          <Rightbar />
        </div>
      </div>
    </QueryClientProvider>
  )
}
export default Layout
