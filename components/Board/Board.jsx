import styles from './Board.module.css';
import cn from 'classnames'
import { Figure } from '../Figure/Figure';
import { useEffect, useState } from 'react';

const makeFiguresArr = (color) => {
  if (color === 'Black')
    return [`${color}Rock`, `${color}Knight`, `${color}Bishop`, `${color}Queen`, `${color}King`, `${color}Bishop`, `${color}Knight`, `${color}Rock`,
    `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`];
  return [`${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`, `${color}Pawn`,
  `${color}Rock`, `${color}Knight`, `${color}Bishop`, `${color}Queen`, `${color}King`, `${color}Bishop`, `${color}Knight`, `${color}Rock`];
}


export const Board = () => {
  let board = [...makeFiguresArr('Black'), ...Array(32).fill(null), ...makeFiguresArr('White')];
  let [activeCell, setActiveCell] = useState(null);
  let possibleMoves = new Set();
  
  const clickCell = (i) => {
    return (e) => {
      possibleMoves.clear();
      if (board[i])
        setActiveCell(i);
        possibleMoves.add(40);
      console.log(activeCell);
    }
  }

  let cells = Array(64).fill(null).map((e, i) => {
    let props = {
      onClick: clickCell(i),
      figure: board[i],
      color: (i % 2 && (Math.floor(i / 8) % 2)) || (!(i % 2) && !(Math.floor(i / 8) % 2)) ? 'light' : 'dark',
      style: i === activeCell ? {
        background: 'green'
      } : {},
      possibleMove: possibleMoves.has(i)
    }
    return <Cell key={i} {...props}/>
  });

  return (
    <div className={styles.board}>
      {cells}
      {/* <Figure name={'Pawn'}/> */}
      {/* <Cell color={'dark'} figure={<Figure name={'WhitePawn'}/>}/> */}
    </div>
  );
}

const Cell = ({color, figure=null, onClick=null, possibleMove=false,...props}) => {
  return (
    <div className={cn(styles.cell, {
      [styles.darkCell]: color === 'dark', 
      [styles.lightCell]: color === 'light' 
    })}
    onClick={onClick}
    {...props}>
      {figure && <Figure name={figure}/>}
      {possibleMove && <Figure possibleMove={true}/>}
    </div>
  )
}
  