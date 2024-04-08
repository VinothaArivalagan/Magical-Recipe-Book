import List from "../components/List";
import { Link } from "react-router-dom";
import classes from "../components/styling/List.module.css";


function ItemDetailsPage(props) {
 
  return (
    <div>
      <h1>Details</h1>
      {props.data.map((List) => {
        return (
          <Link key={List.id} className="List" to = {`/item/${List.id}`}>
            <img src={List.image} className={classes.img}/>
            <h3>{List.name}</h3>
            <p>{List.calories}</p>
            <p>{List.servings}</p>
            
          </Link>
        );
      })}
    </div>
  );
}



export default ItemDetailsPage;