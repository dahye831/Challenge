import React, { useReducer} from "react";
import mentorReducer from "../reducer/mentors-reducer";

const initData = [
  { name: "Ria", position: "developer" },
  { name: "Luna", position: "pianist" },
  { name: "James", position: "teacher" },
];

const Mentors = () => {
  const [mentor, dispatch] = useReducer(mentorReducer, initData);

  const handleChange = () => {
    const prev = prompt('이름을 바꿀 멘토는 누구입니까?')
    const current = prompt('바꿀 이름을 입력해주세요')
    
    dispatch({type: 'changed', prev, current})
  }

  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름을 입력해주세요')
    const position = prompt('멘토의 직업을 입력해주세요')

    dispatch({ type: "added", name, position });
  }

  const handleDelete = () => {
    const name = prompt("삭제할 멘토의 이름을 입력해주세요")
    
    dispatch({ type: "deleted", name });
  }

  return (
    <>
      <h1>Mentors</h1>
      <ul>
        {mentor.map((item, index) => (
          <li key={`mentor-${index}`}>{item.name} ({item.position})</li>
        ))}
      </ul>

      <button type="button" onClick={handleChange}>멘토 이름 바꾸기</button>
      <button type="button" onClick={handleAdd}>멘토 추가하기</button>
      <button type="button" onClick={handleDelete}>멘토 삭제하기</button>
    </>
  );
}

export default Mentors