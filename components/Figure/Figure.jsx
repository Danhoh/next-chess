import styles from './Figure.module.css';


// figures names expample: BlackBishop, WhitePawn, WhiteKnight

// black figures
import BlackPawn from './assets/black/pawn.svg'  
import BlackQueen from './assets/black/queen.svg'
import BlackKing from './assets/black/king.svg'
import BlackKnight from './assets/black/knight.svg'
import BlackBishop from './assets/black/bishop.svg'
import BlackRock from './assets/black/rock.svg'

// white figures
import WhitePawn from './assets/white/pawn.svg'  
import WhiteQueen from './assets/white/queen.svg'
import WhiteKing from './assets/white/king.svg'
import WhiteKnight from './assets/white/knight.svg'
import WhiteBishop from './assets/white/bishop.svg'
import WhiteRock from './assets/white/rock.svg'

import PossibleMove from './assets/move.svg'



export const Figure = ({name='', style, possibleMove=false}) => {
    const props = {
      className: styles.figure,
      style: style
    }
    if (name.indexOf('Pawn') !== -1) {
      return name.indexOf('White') !== -1 ? <WhitePawn {...props}/> : <BlackPawn {...props}/>;
    } 
    if (name.indexOf('Queen') !== -1) {
      return name.indexOf('White') !== -1 ? <WhiteQueen {...props}/> : <BlackQueen {...props}/>;
    } 
    if (name.indexOf('King') !== -1) {
      return name.indexOf('White') !== -1 ? <WhiteKing {...props}/> : <BlackKing {...props}/>;
    } 
    if (name.indexOf('Bishop') !== -1) {
      return name.indexOf('White') !== -1 ? <WhiteBishop {...props}/> : <BlackBishop {...props}/>;
    } 
    if (name.indexOf('Knight') !== -1) {
      return name.indexOf('White') !== -1 ? <WhiteKnight {...props}/> : <BlackKnight {...props}/>;
    } 
    if (name.indexOf('Rock') !== -1) {
      return name.indexOf('White') !== -1 ? <WhiteRock {...props}/> : <BlackRock {...props}/>;
    } 
    if (possibleMove) {
      return <PossibleMove {...props}/>;
    }
}
  