import React, { useState } from "react";
import styled from "styled-components";

const Jasik = ({ onAdd }: any) => {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const onSubmit = (e : any) => {
    e.preventDefault();
    onAdd(form);

    setForm(
      {
        name: "",
        age: "",
      }
    );
  };

  const changeInput = (e: any) => {
    //React에서 input 엘리먼트를 사용시 무조건 onChange 핸들러가 필요함.
    const { value, name } = e.target;

    let tmp = {
      ...form,
      [name]: value,
    };

    setForm(tmp);
  };
  const {name, age} = form;

  return (
    <JasikContainer>
      <form onSubmit={onSubmit}>
        <span>이름</span>
        <br />
        <br />
        <input
          type="text"
          name="name"
          onChange={changeInput}
          value={name}
        />
        <br />
        <span>나이</span>
        <br />
        <br />
        <input
          type="text"
          name="age"
          onChange={changeInput}
          value={age}
        />
        <button type="submit">저장</button>
      </form>
    </JasikContainer>
  );
};

const JasikContainer = styled.div``;

export default Jasik;
