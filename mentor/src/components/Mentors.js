import React, { useState } from "react";
import { useImmer } from "use-immer";

const initData = [
  { name: "Ria", position: "developer" },
  { name: "Luna", position: "pianist" },
  { name: "James", position: "teacher" },
];

const Mentors = () => {
  const [person, updatePerson] = useImmer(initData)
  const handleChange = () => {
    const prev = prompt("이름을 바꿀 멘토는 누구입니까?");
    const current = prompt("바꿀 이름을 입력해주세요");

    updatePerson(person => {
      const mentor = person.find(item => item.name === prev)
      mentor.name = current
    })
  };

  const handleAdd = () => {
    const name = prompt("추가할 멘토의 이름을 입력해주세요");
    const position = prompt("멘토의 직업을 입력해주세요");

    updatePerson(person => {
      person.push({name, position})
    })
  };

  const handleDelete = () => {
    const name = prompt("삭제할 멘토의 이름을 입력해주세요");

    updatePerson(person => {
      const index = person.findIndex(item => item.name === name)
      person.splice(index, 1);
    })

  };

  return (
    <>
      <h1>Mentors</h1>
      <ul>
        {person.map((item, index) => (
          <li key={`mentor-${index}`}>
            {item.name} ({item.position})
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleChange}>
        멘토 이름 바꾸기
      </button>
      <button type="button" onClick={handleAdd}>
        멘토 추가하기
      </button>
      <button type="button" onClick={handleDelete}>
        멘토 삭제하기
      </button>
    </>
  );
};

export default Mentors;
