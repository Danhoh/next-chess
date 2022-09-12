import styles from './Board.module.css';
import cn from 'classnames'

export const Board = () => {
  let cells = Array(64).fill(null).map((e, i) => <Cell key={i} color={(i % 2 && (Math.floor(i / 8) % 2)) || (!(i % 2) && !(Math.floor(i / 8) % 2)) ? 'dark' : 'light'}/>);
  return (
    <div className={styles.board}>
      {cells}
    </div>
  );
}

const Cell = ({color, figure=null}) => {
  return (
    <div className={cn(styles.cell, {
      [styles.darkCell]: color === 'dark', 
      [styles.lightCell]: color === 'light' 
    })}>
      {figure && figure}
    </div>
  )
}
  