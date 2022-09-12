import styles from './Figure.module.css';
import Pawn from './assets/black/queen.svg'  // Figures images

export const Figure = ({name}) => {
  return (
      <Pawn className={styles.figure}/>
  );
}
  