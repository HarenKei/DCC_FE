import React, { useRef, useState } from 'react';

const ClassInputForm = ({onAdd, closeModal} : any) => {
    const classNameRef = useRef();
    
    //form에 새로들어올 값들의 공간을 마련해놓는다
    const [form, setForm] = useState({
        className: '',
        profName: '',
        classroom: '',
        day: 0,
        startTime: '',
      });

	//여러개의 input값을 받을때는 아래와같이 value와 name을 받아 넘긴다
    const changeInput=(e : any)=>{
        const{ value, name} = e.target
        console.log(value);
        setForm({
            ...form,
            [name] : value
        })

    }

    const onSubmit=(e : any)=>{
        e.preventDefault() //섭밋후 자동 새로고침 방지
        onAdd(form);
        console.log(form);
        setForm({
            className : '',
            profName : '',
            classroom : '',
            day: 0,
            startTime : ''
        }) //입력한 값을 넘긴뒤 from은 다시 reset
        classNameRef.current.focus() //name란에 focus
        
        closeModal();
    }
    
    const {className, profName, classroom, day, startTime} = form

    return (
        <form className="formadd" onSubmit={onSubmit}>
            <p><label>강의명 </label> : <input type="text" onChange={changeInput} value={className} name="className" ref={classNameRef}/></p>
            <p><label>교수명 </label> : <input type="text" onChange={changeInput} value={profName} name="profName"/></p>
            <p><label>강의실 </label> : <input type="text" onChange={changeInput} value={classroom} name="classroom"/></p>
            <p><label>요일 </label> : <input type="number" onChange={changeInput} value={day} name="day"/></p>
            <p><label>시간 </label> : <input type="time" onChange={changeInput} value={startTime} name="startTime"/></p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default ClassInputForm;