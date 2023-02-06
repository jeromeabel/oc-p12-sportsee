import styles from './Loader.module.scss';

/**
 * Render the loader component when the data are loading.
 */

function Loader() {
  return (
    <div className={styles.loader}>
      <p>Chargement ...</p>
    </div>
  );
}

export default Loader;
