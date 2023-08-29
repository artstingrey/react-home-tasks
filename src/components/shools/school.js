import React, { useMemo, useState } from 'react';

const School = () => {
    const basicArray = ['a','b','c','d','e','f','g'];

    const basicRandomArray = useMemo(() => {
        console.log('basicRandomArray');
        return basicArray.sort(() => Math.random() - 0.5); 
    }, []);

    const basicRandomHalfArray = useMemo(() => {
        console.log('basicRandomHalfArray');
        return basicRandomArray.slice(0, Math.floor(basicRandomArray.length / 2));
    }, []);

    const [classesArray, setclassesArray] = useState(basicRandomArray);

    function changeArrayLenght() {
        if (classesArray.length > basicRandomHalfArray.length) {
            setclassesArray(basicRandomHalfArray);
        } else {
           setclassesArray(basicRandomArray);     
        }
    }

    return (
        <div className='school'>
            <div className='school__numbers'>
                {classesArray.map((name, index) => {
                    return (<div className='school__number' key={index}>
                        {index + 1}{name}
                    </div>)
                })}
            </div>
            <button onClick={changeArrayLenght}>Hide classes</button>
        </div>
    );
};

export default School;