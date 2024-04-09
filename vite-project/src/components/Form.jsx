import { useState } from "react";
import { v4 as uuidv4} from "uuid"

 
function Form({handleNewRecipe}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState(1);
 
  const handleSubmit = event => {
    event.preventDefault()
    const newRecipe = {
        id: uuidv4(),
        name,
        calories,
        servings, image
    }
    handleNewRecipe(newRecipe)
  }
      return (
    <div className="AddRecipe">
      <h4>Add a Recipe</h4>
  
      <form onSubmit={handleSubmit}>
                
  
        <label>Name: </label>
        <input 
            type="text" 
            name="name" 
            value={name} onChange={event => setName(event.target.value)}
        />

        <label>Image: </label>
        <input 
            type='text' 
            name="image" 
            value={image} onChange={event => setImage(event.target.value)}
        />
  
        <label>Calories: </label>
        <input 
            type="number" 
            name="calories" 
            value={calories} onChange={event => setCalories(event.target.value)}
        />
  
        <label>Servings: </label>
        <input 
            type="number" 
            name="servings" 
            value={servings} onChange={event => setServings(event.target.value)}
        />
        
        <button >
            <span>Add a Recipe</span>
      </button>
      </form>
    </div>
  );
 
    
  
}
 
export default Form;