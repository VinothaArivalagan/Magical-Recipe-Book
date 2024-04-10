import { Link, useParams } from "react-router-dom";
import classes from "../components/styling/List.module.css";
import { useEffect, useState } from "react";


function ItemDetailsPage(props) {
  const {recipeId} = useParams()
  const [recipe, setRecipe] = useState(undefined);

  useEffect(() => {
    const foundRecipe = props.data.find((recipe) => recipe.id === recipeId)
    setRecipe(foundRecipe)

  },[recipeId])
 
  return (
    <div>
      <h1>Details</h1>
     {recipe && <Link key={recipe.id} className="List" to = {`/item/${recipe.id}`}>
            <img src={recipe.image} className={classes.img}/>
            <h3>{recipe.name}</h3>
            <p>{recipe.calories}</p>
            <p>{recipe.servings}</p>
            
          </Link> }
          
      
    </div>
  );
}



export default ItemDetailsPage;