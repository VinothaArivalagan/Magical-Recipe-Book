
import List from "../components/List";

function Home({data}) {
 

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <List data={data}  />
      
    </div>
  );
}

export default Home;


   
  

