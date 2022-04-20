interface CounterProps {
    value: number
    onIncrement: () => void
    onDecrement: () => void
}

const Counter = (props: CounterProps): React.ReactElement<CounterProps> => {
    return (
        <div>
            <h1>{props.value}</h1> 
            <button onClick={props.onIncrement}>+</button> 
            <button onClick={props.onDecrement}>-</button> 
        </div>
    );
  }
  
  export default Counter;
  