import React, { useState } from 'react';


function MatrixComponent() {
    const dimension = 3
    const [matrix, setMatrix] = useState(
        [
            [1,2,3],
            [4,5,6],
            [7,8, 10]
        ]
    )

    const rotateMatrix  = (matrix) => {        
        let rotatedMatrix = []
        for (let i = 0; i < matrix.length; i++) {
            rotatedMatrix.push([])
        }
        let depth = matrix.length-1;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                rotatedMatrix[j][depth] = matrix[i][j];
            }
            depth--;
        }
        setMatrix(rotatedMatrix);
    }
    const generateRandomMatrix = () => {
        let randomMatrix = []
        for (let i = 0; i < dimension; i++) {
            randomMatrix.push([])
        }
        for (let i = 0; i < dimension; i++) {
            for (let j = 0; j < dimension; j++) {
                randomMatrix[i][j] = Math.floor(Math.random() * 101);
            }
        }
        setMatrix(randomMatrix)
    }
    const settingValue = (rowIndex, colIndex, value) => {
        let tmpMatrix = [...matrix];
        tmpMatrix[rowIndex][colIndex] = value
        setMatrix(tmpMatrix)
    }
    return (

    <div className="grid grid-cols-3 gap-8">

    {matrix.map( (rows, rowIndex) => {
        return(
        rows.map( (elem, colIndex) =>{
            return (
            <div className="flex flex-col shadow justify-center h-24 w-24  bg-white rounded">

                <input max="5" onChange={(event) => settingValue(rowIndex,colIndex, event.target.value)} className="text-3xl font-semibold text-center text-gray-800" value={elem}></input>
        </div>)
        }))
    })}
    <div className="flex col-span-3 gap-6">
    <button className="hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded " onClick={() => {rotateMatrix(matrix)}}>Rotate</button>
    <button className="hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded " onClick={() => {generateRandomMatrix()}}>Generate Random Matrix</button>
    </div>
    </div>
    )
}

export default MatrixComponent;