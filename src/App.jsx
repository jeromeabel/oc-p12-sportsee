import { Dashboard } from 'pages/Dashboar/Dashboard';
import { NavHorizontal } from 'common/NavHorizontal/NavHorizontal';
import { NavVertical } from 'common/NavVertical/NavVertical';

function App() {
  return (
    <div className="App">
      <NavHorizontal />
      <div className="App__body">
        <NavVertical />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
