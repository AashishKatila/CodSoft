import React,{useReducer} from 'react'
import './App.css'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE:'evaluate'
}

function reducer(state,{type,payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      // To not add multiple 0 at first 
      if(payload.digit === "0" && state.currentOperand === "0") return state

      //To not add multiple decimal
      if(payload.digit === "." && state.currentOperand.includes(".")) return state

      //To display each digit on the screen of calculator
      return{
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
      //FOR AC button
      case ACTIONS.CLEAR:
        return {}

      //When operators are clicked
      case ACTIONS.CHOOSE_OPERATION:
        if(state.currentOperand == null && state.previousOperand == null ) return state

        if(state.previousOperand == null){
          return{
            ...state,
            operation: payload.operation,
            previousOperand : state.currentOperand,
            currentOperand: null
          }
        }

  }
}

const App = () => {

  const [{currentOperand,previousOperand,operation},dispatch] = useReducer(reducer,{})
  
  return (
    <div className='calculator-grid'>
      
      <div className="output">
        <div className="previous-operand">{previousOperand}{operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      
      <button className='span-two' onClick={() =>dispatch({type: ACTIONS.CLEAR})} >AC</button>
      <button >DEL</button>
      <OperationButton operation='/' dispatch={dispatch} />
      
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />
      
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />



      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />

 

      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button className='span-two' >=</button>
    </div>
  )
}

export default App