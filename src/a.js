import { useState } from 'react';
import B from './b';

function A() {
  const [cendol, setCendol] = useState(2);
  const [isTrue, setIsTrue] = useState(false);
  
  return (
    <div className='a'>
      <div className='a-1'>
        <div className='a-2' style={{ backgroundColor: isTrue ? 'red' : 'blue' }}>
          <B cendol={cendol} setCendol={setCendol} isTrue={isTrue} setIsTrue={setIsTrue} />
        </div>
      </div>
    </div>
  );
}

export default A;