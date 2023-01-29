import Profile from '../../pages/Profile/Profile';
import NavHorizontal from '../NavHorizontal/NavHorizontal';
import NavVertical from '../NavVertical/NavVertical';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <header>
        <NavHorizontal />
      </header>
      <main className={styles.app__main}>
        <NavVertical />
        <Profile />
      </main>
    </div>
  );
}

export default App;
