import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import List from "../components/List";

function Home({data}) {
 
  const handleDelete = (id) => {
    console.log(`Item with ID ${id} deleted`);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <List data={data} onDelete={handleDelete} />
      
    </div>
  );
}

export default Home;


   
  

