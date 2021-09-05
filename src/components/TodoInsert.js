import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
// <TodoInsert onInsert={onInsert}/> 이거 여기서 받은거임 
const TodoInsert = ({onInsert}) => {
    console.log('TodoInsert.js : ', onInsert, 'app.js 에서 온 함수');
    //insert 기능 구현 
    const [value, setValue] = useState('');

    // const onChange = e => {
    //     setValue(e.target.value);
    // };

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    //버튼 클릭
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();//새로고침 방지 
            
        },
        [onInsert, value]
    )

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
                   value={value}
                   onChange={onChange}
            ></input>
            <button type="submit"><MdAdd/></button>
        </form>
    )
};

export default TodoInsert;