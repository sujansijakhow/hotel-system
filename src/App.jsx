import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {

  return (
   <div className="flex gap-2">
      <Sidebar />
      <Navbar />
   </div>
  )
}

export default App;
