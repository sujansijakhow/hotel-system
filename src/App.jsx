import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {

  return (
   <div className="flex gap-">
      <Sidebar />
      <Navbar />
   </div>
  )
}

export default App;
