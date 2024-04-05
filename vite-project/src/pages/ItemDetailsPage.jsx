import { useParams } from 'react-router-dom';

function ItemDetailsPage() {
  const { id } = useParams();

  // Fetch item details based on the id
  const itemDetails = {}; // Your item details data

  return (
    <div>
      <h2>Item Details</h2>
      <p>ID: {id}</p>
      <p>Item Name: {itemDetails.name}</p>
      <p>Item Description: {itemDetails.description}</p>
      {/* Other item details */}
    </div>
  );
}

export default ItemDetailsPage;