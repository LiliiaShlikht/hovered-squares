import './Dropdown.css';
import Select from 'react-select';

function Dropdown (Props) {
    function handleChange (event) {
        let currentCellNum = event.value;
        Props.setSelectedOption({ cellNum: currentCellNum });
    }

    return (
        <div className='dropdown'>
            <Select
                options={Props.options} 
                placeholder='Pick mode' 
                onChange={event => handleChange(event)}>
            </Select>
        </div>
    )
}

export default Dropdown;