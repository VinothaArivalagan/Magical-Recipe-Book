import data from "../recipes.json"
import classes from "./styling/List.module.css";
import { useState } from "react";

console.log(data)
const List = () => {
    const [recipeList, setRecipeList] = useState(data);

    const handleDelete = recipeId => {
        setRecipeList(recipeList.filter(currentRecipe => currentRecipe.id !== recipeId))
    }

    return (<ul>
        {data.map(currentRecipe => (<li key={currentRecipe.id}
        className={classes.ctn}>
            <img src={currentRecipe.image} className={classes.img}/>
            <div>
                <h3>{currentRecipe.name}</h3>
                <p>{currentRecipe.calories}</p>
                <p>{currentRecipe.servings}</p>
                <button type ='button' onClick={() => handleDelete(currentRecipe.id)}> Delete </button>

            </div>
        </li>))}
    </ul>
    ) 
}



export default List;


