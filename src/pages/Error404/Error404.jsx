import { Link } from 'react-router-dom';

//import { useSetTitle } from 'common/hooks/setTitle';

import styles from './Error404.module.scss';

export default function Error404() {
  //useSetTitle('Erreur 404');
  return (
    <div className={styles.error404}>
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
