import { useState } from 'react';
import './Cell.css';

function Cell (Props) {
    const [styles, setStyles] = useState({
        isHovered: true,
        backgroundColor: 'white'
    });

    let newBack = styles.isHovered;
    let cell = Props.cellStyle;

    function changeColor() {
       newBack=!newBack;
        if(styles.isHovered) {
            setStyles({backgroundColor: 'rgb(100, 193, 230)', isHovered: newBack});
            Props.setCellPosition([...Props.cellPosition, {row: Props.row+1, col: Props.col+1}])
        } else {
            setStyles({backgroundColor: 'white', isHovered: newBack});
                const index = Props.cellPosition.findIndex((el) => {
                    return (el.row === Props.row+1) && (el.col === Props.col+1)
                })
            Props.setCellPosition(Props.cellPosition.filter((item, elIndex) => elIndex !== index));
        }
    }
    
    return (
        <div className={cell} style={styles} onMouseEnter={changeColor} />
    )
}

export default Cell;