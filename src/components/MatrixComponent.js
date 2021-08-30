import React, { useState } from 'react';


function MatrixComponent() {

    const [matrix, setMatrix] = useState(
        [
            [1,2,3],
            [4,5,6],
            [7,8, 10]
        ]
    )

    /*
    (0,0) --> (0,2)
    (0,1) --> (1,2)
    (0,2) --> (2,2)

    (1,0) --> (0,1)
    (1,1) --> (1,1)
    (1,2) --> (2,1)

    */
    const rotateMatrix  = (matrix) => {        
        let rotatedMatrix = []
        for (let i = 0; i < matrix.length; i++) {
            rotatedMatrix.push([])
        }
        let dimension = matrix.length-1;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                rotatedMatrix[j][dimension] = matrix[i][j];
            }
            dimension--;
        }
        setMatrix(rotatedMatrix);
    }
    const generateRandomMatrix = (dimension) => {
        let randomMatrix = []
        for (let i = 0; i < dimension; i++) {
            randomMatrix.push([])
        }

    }
    return (<div className="grid grid-cols-3 gap-8 w-1/2 h-1/2">

    {matrix.map( (rows) => {
        return(
        rows.map( (elem) =>{
            return (
            <div class="flex flex-col shadow justify-center h-24 w-24  bg-white rounded">
                <div>
                    <p class="text-3xl font-semibold text-center text-gray-800">{elem}</p>
                </div>
        </div>)
        }))
    })}
    <button onClick={() => {rotateMatrix(matrix)}}>test</button>
    </div>)
}

export default MatrixComponent;