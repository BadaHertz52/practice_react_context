## Projcet 소개 
[프로젝트 바로가기](https://badahertz52.github.io/practice_react_context/)

react로 트위터를 클론코딩하는 프로젝트의 연습 프로젝트로 페이지의 기능을 더할 수록 서버(firebase 를 서버로 이용함)에 대한 읽기 요청 수가 급격하게 증가하는 문제점이 발생하여 이를 해결하기 위해 자주 사용하는 사용자의 프로필과 게시글 목록을  context를 이용하여 전역적으로 사용 할 수 있도록 했다. 

____________________________________________________________________________________________________
## Context API 에 대해 공부한 내용 
### 1. 무엇?

  트리 단계로 props를 넘겨주는 react의 단점을 보완한 api 이다.
  context를 이용해 props를 전역적으로 사용,관리할 수 있다. 


### 2. 어떻게?

  A. "createContext"로 context 를 생성하고  "context.Provider value "로 넘겨줄 값을 설정한다

  B  context 를 사용할 수 있는 컴포넌트를 설정한다

  C. "useContext"로 context 를 사용한다. 

- 기본 사용
    
    <Context.js>
    
    ```jsx
    import React, { createContext } from "react";
    
    export const MyContext =createContext();****
    
    const ContextProvider =(props)=>{
      const users ={
        name:"안녕",
        job:"developer"
      };
    
      return <MyContext.Provider value={users} >
              {props.children}
              </MyContext.Provider>
    };
    
    export default ContextProvider ;
    ```
    
    <App.js>
    
    ```jsx
    import './App.css';
    import React from 'react';
    import ShowContext from './ShowContext';
    import ContextProvider from './Context';
    
    function App() {
    
      return(
        <ContextProvider>
          <ShowContext/>
        </ContextProvider>
      );
    }
    
    export default App;
    ```
    
    <ShowContext.js>
    
    ```jsx
    import React from "react";
    import { useContext } from "react/cjs/react.development";
    import { MyContext } from "./Context";
    
    const ShowContext =()=>{
      const user = useContext(MyContext);
    
      return(
        <div>
          {user.name}
        </div>
      )
    };
    
    export default ShowContext;
    ```
    
- useReducer 와 함께 사용
    
    <NweetContext.js> :  useReducer와  context 를 생성
    
    ```jsx
    cosnt initialState ={ ...};
    const reducer =(state, dispatch)=>{
    ...};
    export const NweetContext= createContext(null);
    const NCProvider =(props)=>{
    const[state, dispatch] = useReducer(reducer, initialState); 
    
    return <NweetContext.Provider value={{state: state, dispatch}}>{porps.childer}</NweetContext.Provider>
    };
    
    export default NCProvider ;
    ```
    
    <App. js> - context를 사용할 컴포넌트 지정
    
    ```jsx
    function App(){
    return (...
    <NCProvider>
    	<CreateNweet/>
    	<NweetList/>
    </NCProvider>
    ....)
    };
    ```
    
    <CreateNweet.js> - context, reducer를 실행 할 곳, nweet(게시글을 작성)하는 기능을 담당 
    
    ```jsx
    const CreateNweet=()=>{
    	const {state, dispatch}= useContext(NweetContext);
    	const {text, attchment}= state.input;
    .....
    	/*input에 작성하고, 작성된 글을 저장하는 기능*/
    	const onChange= useCalback(e=>{
    		const {name, value}= e.target:
    .....
    },[]);
    
     return(
    	.....
    <div>
    	<textarea .... onchange={onChange}/>
    </div>
    )
    ......
    };
    ```
    

### 3. 주의

A. context의 값이 변경될 경우 context를 사용하는 컴포넌트들은 모두 렌더링 된다.

 → 해결방법: 커뮤니티에서 나오는 해결방법으로는 context를 분할하여 필요한 곳에서 필요한 것만 사용하도록 하거나 React.memo 나 useMemo로 최적화를 하는 것이 있음

B. Context를 사용하면 재사용하지 어렵다. 
→ 해결 방법:  context를 사용한 컴포넌트를 재사용해야 한다면 context에서 value을 받아서 사용할 컴포넌트(ui)를 context를 생성하는 컴포넌트와 별도로 만들어서  별도로 만든 컴포넌트를 재사용할 수 있다. 


### 4. 참고자료

[https://www.youtube.com/watch?v=sqz45pnvJHg&feature=youtu.be](https://www.youtube.com/watch?v=sqz45pnvJHg&feature=youtu.be)

[https://medium.com/react-native-seoul/react-리액트를-처음부터-배워보자-05-context-api-d053f92cd645](https://medium.com/react-native-seoul/react-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EC%B2%98%EC%9D%8C%EB%B6%80%ED%84%B0-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90-05-context-api-d053f92cd645)