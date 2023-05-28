## Mentor
1. 이름 바꾸기
2. 이름 추가하기
3. 이름 삭제하기

### 개념
- 리액트의 객체 불변성
  - 변경된 데이터를 병합하지 않고 복사한다. 
  - 참고 : [https://velog.io/@rimo09/react-%EB%B6%88%EB%B3%80%EA%B0%9D%EC%B2%B4%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0]
- statement & expression
  - expression : 값으로 표현될 수 있는 문
  - statement : 프로그램을 구성하는 기본 단위이자 최소 실행 단위

  - 화살표 함수 구문 [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions]
  <pre>
    <code>
      (param) => {statement}
      (param) => expression
    </code>
  </pre>
- useState :[https://ko.legacy.reactjs.org/docs/hooks-state.html]
  - state 값 관리 
  <pre><code>
    const [state, setState] = useState(초기값)
    const variableState = useState('초기값')
    const state = variableState[0]
    const setState = variableState[1]
  </code></pre>
- useReducer : [https://ko.legacy.reactjs.org/docs/hooks-reference.html#usereducer]
<pre>
<code>
const [state, dispatch] = useReducer(reducer, initData, init)

function reducer(state, action) {
  switch(action.type) {
    case 'type1' : {
      return {}
    }
    default :
      throw Error()
  }
}
</code>
</pre>
- useImmer : [https://github.com/immerjs/use-immer]
- 비교 알고리즘
  - Object.is() [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description]