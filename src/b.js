function B(props) {
  let cendol = props.cendol
  let setCendol = props.setCendol
  let isTrue = props.isTrue
  let setIsTrue = props.setIsTrue

  const handleIncrement = () => {
    setCendol(cendol + 10);
  }

  const handleChange = () => {
    setIsTrue(!isTrue);
  }
  return (
    <div className='b'>
       <h1 className="counter">{cendol}</h1>
      <button id="btn-1" style={{ backgroundColor: isTrue ? 'red' : 'blue' }} onClick={() => handleIncrement()}>Click to increase counter</button>
      <button id="btn-2" onClick={handleChange} style={{ backgroundColor: isTrue ? 'red' : 'blue' }}>
        Change color
      </button>
    </div>
  );
}

export default B;
