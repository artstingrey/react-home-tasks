import React from 'react';
import School from './school';

const Schools = props => {
    return (
        <div className='schools'>
            <School />
            <School /> 
            <School />           
        </div>
    );
};

export default Schools;