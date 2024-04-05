import List from '../components/List';

function DashboardPage() {
  // Fetch or pass data to the List component
  const data = []; // Your items data
  return (
    <div>
      <h2>Dashboard</h2>
      <List data={data} />
    </div>
  );
}

export default DashboardPage;