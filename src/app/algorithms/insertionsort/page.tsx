"use client"

import { useEffect, useState } from "react"

// const insSort = (parentArr: number[]): number[][] => {

//     const historyArrays: number[][] = []

//     let sortedArr: number[] = []
//     historyArrays.push(sortedArr);


//     for (let i = 0; i < parentArr.length; i++) {

//         const testElem = parentArr[i]
//         let j = sortedArr.length

//         while (true) {
//             if (testElem > sortedArr[j - 1]) {
//                 sortedArr.splice(j, 0, testElem);
//                 historyArrays.push(structuredClone(sortedArr))
//                 break;
//             }
//             else {
//                 j--;
//             }
//         }

//     }

//     return historyArrays

// }

export const insSort = (parentArr: number[]): number[][] => {

    const historyArrays: number[][] = []

    let sortedArr: number[] = []
    historyArrays.push(structuredClone(sortedArr));


    for (let i = 0; i < parentArr.length; i++) {

        const testElem = parentArr[i]
        let j = sortedArr.length

        while (true) {
            if (j == 0 || testElem > sortedArr[j - 1]) {
                sortedArr.splice(j, 0, testElem);
                historyArrays.push(structuredClone(sortedArr))
                break;
            }
            else {
                j--;
            }
        }
    }
    return historyArrays

}


export const Insertion = () => {

    const startArr = [3, 4, 2, 6, 7, 8, 1, 9, 5, 10]

    const [displayArr, setDisplayArr] = useState<number[]>([])
    const [step, setStep] = useState(0)
    const historyArrays = insSort(startArr)

    useEffect(() => {
        if (step < historyArrays.length) {
            setDisplayArr(structuredClone(historyArrays[step]))
            setTimeout(() => setStep(step + 1), 1000)
        }

    }, [step])

    console.log(historyArrays)
    console.log(step)



    return (
        <>
            <div className="h-full flex flex-col justify-center items-center gap-5">

                <div className="text-xl font-bold">

                    Insertion Sort Visualization
                </div>
                <div className="flex flex-col gap-3">

                    <div className="flex flex-row gap-1">
                        Starting array: {startArr.map((num, idx) => {
                            return <Rectangle key={idx} length={num} isTarget={false} />
                        })}
                    </div>
                    <div className="flex flex-row gap-1">
                        Sorted array: {displayArr.map((num, idx) => {
                            return (
                                <Rectangle key={idx} length={num} isTarget={true} />
                            )
                        })}
                    </div>

                </div>

            </div>
        </>
    );
}

const Rectangle = ({ length, isTarget }: { length: number, isTarget: boolean }) => {
    const boxHeight = length * 20;
    const color = isTarget ? "#CD5C5C" : "#6495ED"
    return (
        <div style={{ height: boxHeight, backgroundColor: color }} className="w-[25px]">

        </div>
    )

}

export default Insertion