import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import './TodoListItem.scss';
//조건부 스타일링을 위함 
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    //아 이렇게 함수의 재사용성이 나오는구나 
   
    console.log('TodoListItem.js : ', todo);

    const {id, text, checked, currentDate} = todo;

    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
                <div className="date">{currentDate}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
};

 export default TodoListItem;