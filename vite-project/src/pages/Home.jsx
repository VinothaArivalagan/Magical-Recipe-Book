
import List from "../components/List";

function Home({data,handleDelete}) {
 

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <List data={data} handleDelete={handleDelete} />
      
    </div>
  );
}

export default Home;


   
  

