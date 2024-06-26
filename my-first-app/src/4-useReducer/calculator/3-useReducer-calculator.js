import React, { useReducer} from 'react'
import "./3-app.css";
// import DigitButton from "./Digitbutton";
// import OperationButton from './Operationbutton';

// let currentOperand
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION:"choose-operation",
  CLEAR:"clear",
  DELETE_DIGIT:"delete-digit",
  EVALUATE:"evaluate"
}

function Reducer(state, {type, payload}){

  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(state.overWrite){
        return {
          ...state,
          currentOperand:payload.digit,
          overWrite:false
        }
      }
      if( payload.digit==="0" &&state.currentOperand === "0"){
        return{
          ...state
        }
      }

      if(payload.digit === "." && state.currentOperand == null){
        return{
          ...state,
          currentOperand: `0${payload.digit}`
        }
      }

      else if(payload.digit === "." && state.currentOperand.includes(".")){
        return state
      }

      
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
    
    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.CHOOSE_OPERATION:
      console.log(payload.operation)
      if(state.previousOperand == null && state.currentOperand == null && payload.operation === '-'){
        console.log("done")
        return {
          ...state,
          currentOperand: `${payload.operation}`
        }
      }

      if(state.previousOperand == null && state.currentOperand == null){
        return state
      }

      if(state.previousOperand == null){
        return{
          ...state,
          operator: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null
        }
      }

      if(state.currentOperand == null){
        return{
          ...state,
          operator: payload.operation
        }
      }
      

      return{
        ...state,
        previousOperand: evaluate(state),
        operator: payload.operation,
        currentOperand: null
      }
    
    case ACTIONS.EVALUATE:
      if(state.currentOperand == null){
          return {
            ...state,
            currentOperand:state.previousOperand,
            previousOperand:null,
            operator:null,
            overWrite:true
          }
      }
      if(state.previousOperand == null || 
        state.currentOperand == null || 
        state.operator == null){
          return state
      }
      return{
        ...state,
        // add overWrite for currentOperand is evaluate answer...
        overWrite:true,
        currentOperand:evaluate(state),
        previousOperand: null,
        operator:null,
      }

    case ACTIONS.DELETE_DIGIT:
      if(state.overWrite){
        return {
          ...state,
          currentOperand:null,
          overWrite:false,
        }
      }
      if(state.currentOperand == null){
        return state
      }
      if(state.currentOperand.length === 1){
        return{...state, currentOperand:null}
      }
      return{
        ...state,
        currentOperand: state.currentOperand.slice(0,-1)
      }
    default:
      return state 
  }
}

function evaluate({previousOperand, currentOperand, operator}){
  let pre = parseFloat(previousOperand);
  let current = parseFloat(currentOperand);
  if(isNaN(pre) || isNaN(current)) return ""
  switch(operator){
    case "/":
      return `${pre / current}`
    case "*":
        return `${pre * current}`
      case "-":
      return `${pre - current}`
    case "+":
      return `${pre + current}`
    default:
      return ""
  }

}


const INTEGER_FORMATER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
})

const formatOperand = (operand) => {
  if(operand == null) return 
  const [integer, decimal ] = operand.split(".");
  if(decimal == null) return INTEGER_FORMATER.format(integer)
  return `${INTEGER_FORMATER.format(integer)}.${decimal}`
}


function DigitButton({dispatch, digit}){
  return <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload:{digit}})} >
      {digit}</button>
}   

function OperationButton({dispatch, operation}){
  return <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload:{operation}})} >
      {operation}
      </button>
}   
const Calculator = () => { 
  // const [isOperand, setIsOperand] = useState(false)

  const [{previousOperand, currentOperand, operator}, dispatch] = useReducer(Reducer, {})
  

  // dispatch({type:ACTIONS.ADD_DIGIT, payload:"="})
  return (
    <div className='claculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{formatOperand(previousOperand)}{operator}</div>
        <div className='current-operand'>{formatOperand(currentOperand)}</div>
      </div>

      <button onClick={() => dispatch({type:ACTIONS.CLEAR})} className='span-two'>AC</button>
      <button onClick={() => dispatch({type:ACTIONS.DELETE_DIGIT})} >DEL</button>
      <OperationButton dispatch={dispatch} operation="/" />
      <DigitButton dispatch={dispatch} digit="1" />
      <DigitButton dispatch={dispatch} digit="2" />
      <DigitButton dispatch={dispatch} digit="3" />
      <OperationButton dispatch={dispatch} operation="*" />
      <DigitButton dispatch={dispatch} digit="4" />
      <DigitButton dispatch={dispatch} digit="5" />
      <DigitButton dispatch={dispatch} digit="6" />
      <OperationButton dispatch={dispatch} operation="-" /> 
      <DigitButton dispatch={dispatch} digit="7" />
      <DigitButton dispatch={dispatch} digit="8" />
      <DigitButton dispatch={dispatch} digit="9" />
      <OperationButton dispatch={dispatch} operation="+" />
      <DigitButton dispatch={dispatch} digit="." />
      <DigitButton dispatch={dispatch} digit="0" />
      <button onClick={() => dispatch({type: ACTIONS.EVALUATE})} className='span-two' >=</button>
    </div>
  )
}

export default Calculator