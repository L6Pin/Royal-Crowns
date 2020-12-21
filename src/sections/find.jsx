import React from 'react';
import Members from '../data.json';

const find = () => {
    return (
         <div className="find">
              {
                    Members.map(item => (
                        <h1>{item.name}</h1>
                    )
                    )
                }
         </div>
    );
}

export default find;