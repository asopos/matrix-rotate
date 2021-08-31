import React, { useState } from 'react';
import { Flipper, Flipped } from "react-flip-toolkit";
import * as uuid from "uuid";

const generateId = () => uuid.v4();

function MatrixComponent() {
    const dimension = 3
    const initialMatrix  = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    const [matrix, setMatrix] = useState(
        initialMatrix.map((col) => col.map((row) =>{
            return {value: row, id: generateId()}
        }))
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
                randomMatrix[i][j] = {value: Math.floor(Math.random() * 101), id:generateId()};
            }
        }
        setMatrix(randomMatrix)
    }

    const settingValue = (rowIndex, colIndex, value) => {
        let tmpMatrix = [...matrix];
        tmpMatrix[rowIndex][colIndex].value = value
        setMatrix(tmpMatrix)
    }
    return (
    <div className="flex p-8 content-center">
        <Flipper
            flipKey={generateId()}
            staggerConfig={{
            default: {
                speed: 0.1,
            },
            }}
        >
            <p className="text-white text-center col-span-3 text-5xl p-8">Matrix Rotate</p>
            <div className="grid grid-cols-3 place-items-center gap-8 mx-auto">
                {matrix.map( (rows, rowIndex) => {
                    return(
                    rows.map( (elem, colIndex) =>{
                        return (
                            <Flipped
                            stagger={true}
                            key={elem.id}
                            flipId={elem.id}
                            translate
                            >
                                <div key={elem.id} className="flex flex-col shadow justify-center h-16 w-16 sm:h-20 sm:w-20 bg-white rounded-lg">
                                    <input  maxLength="5" onChange={(event) => settingValue(rowIndex, colIndex, event.target.value)} className="text-3xl font-semibold text-center text-gray-800" value={elem.value}></input>
                                </div>
                            </Flipped>
                    )
                    }))
                })}
                <p className="text-white text-center col-span-3"> Click cell to change value</p>
                <div className="flex col-span-3 gap-6">
                    <button className="hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded " onClick={() => {rotateMatrix(matrix)}}>Rotate</button>
                    <button className="hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded " onClick={() => {generateRandomMatrix()}}>Generate Random Matrix</button>
                </div>
            </div>
        </Flipper>
    </div>
    )
}

export default MatrixComponent;