import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './Dropdown/Dropdown';
import Cell from './Cell/Cell';


function App() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({ cellNum: null });
  const [cellStyle, setCellStyle] = useState('');
  const [cellPosition, setCellPosition] = useState([]);
  const [createField, setCreateField] = useState(0);

  useEffect(() => {
    fetch('http://demo1030918.mockable.io/')
    .then(response => response.json())
    .then(data => {
      setOptions([
        { value: data.easyMode.field, label: 'Easy' },
        { value: data.normalMode.field, label: 'Normal' },
        { value: data.hardMode.field, label: 'Hard' }
      ]);
    })
  }, [])

  let items = []
  function chooseMode() {
    setCellPosition([])
    setCellStyle(`cell-${selectedOption.cellNum}`);
    setCreateField(selectedOption.cellNum);
  }

  for(let i=0; i<createField; i++) {
    for(let j=0; j<createField; j++) {
      items.push(
        <Cell 
          cellStyle={cellStyle} 
          cellPosition={cellPosition} 
          setCellPosition={setCellPosition} 
          row={i} 
          col={j} 
          key={createField+'-'+i+ '-' +j}>
        </Cell>
      )
    }
  }

  return (
    <div className='main'>
      <div className='leftPart'>
        <div className='header'>
          <Dropdown 
            options={options} 
            selectedOption={selectedOption} 
            setSelectedOption={setSelectedOption}>
          </Dropdown>
          <button className='startButton' onClick={chooseMode}>START</button>
        </div>
        <div className='fieldStyle'>{items}</div>
      </div>
      <div className='rightPart'>
        <h1>Hover squares</h1>
        <div className='noteList'>
          { cellPosition.map((pos,index) => {
            return (
              <div className='note' key={pos.row+ '-' +pos.col}>
                row: {pos.row}, col: {pos.col}
              </div>
            )})
          }
        </div>
      </div>
    </div>
  );
}

export default App;
