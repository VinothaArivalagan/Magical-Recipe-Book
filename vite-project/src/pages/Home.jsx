import List from "../components/List";
import classes from "../components/styling/List.module.css";



function Home({data,handleDelete}) {
 

  return (
    <div className="home">
      <h1 className={classes.title}> MAGICAL RECIPES </h1>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <List data={data} handleDelete={handleDelete} />
      
    </div>
  );
}

export default Home;


   
  

