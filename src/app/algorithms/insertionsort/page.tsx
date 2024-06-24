"use client"

import { useEffect, useState } from "react"

export const Insertion = () => {
    const [startArr, setStart] = useState([3, 4, 5, 6, 7, 8, 1, 9, 2, 10])
    // const { arr } = bubbleSort(startArr)
    const [arr, setArr] = useState<number[]>(structuredClone(startArr))
    // const [sorted, setSorted] = useState(false);

    const [counters, setCounters] = useState({
        inner: 0,
        outer: 0,
    })
    // const [stepMetadata, setStepMetadata] = useState<{
    //   step: number;
    //   swapped: boolean
    // }>({
    //   swapped: false,
    //   step: 0

    // })

    // iterate through the array (outer for loop). this is the test subject
    // iterate through the array (inner for loop) from right to left. Keep iterating until 
    //  test subject is greater than the compared element, then insert it at
    // compared + 1 index



    // useEffect(() => {
    //     // maybe setup timeout and useffect to track i instead of step

    //     if (counters.outer < arr.length) {
    //         debugger;

    //         const testSubj = arr[counters.outer]
    //         setCounters({ inner: counters.outer, outer: counters.outer })
    //         if (counters.inner > 0) {
    //             if (testSubj > arr[counters.inner]) {
    //                 let newArr = structuredClone(arr)
    //                 newArr[counters.inner + 1] = arr[counters.inner]
    //                 newArr[counters.inner] = testSubj
    //                 setArr(newArr)
    //             }
    //             setTimeout(() => setCounters({ outer: counters.outer, inner: counters.inner + 1 }), 1000)
    //             console.log(counters)
    //         }
    //         if (counters.inner == 0) {
    //             const o = counters.outer
    //             setCounters({ inner: counters.inner, outer: (counters.outer + 1) })
    //             console.log(counters)
    //         }

    //     }
    //     else {
    //         return console.log('done!')

    //     }

    // }, [counters])

    // useEffect(() => {
    //     if (step < arr.length) {
    //         const testSubj = arr[step]
    //         for (let i = step; i >= 0; i--) {
    //             if (testSubj > arr[i]) {
    //                 setArr(arr.toSpliced(i))
    //             }
    //         }
    //         setTimeout(() => setStep(step - 1), 50)
    //     }
    //     console.log("sort complete")


    // }, [step])





    return (
        <>
            <div className="h-full flex flex-col justify-center items-center gap-5">

                <div className="text-xl font-bold">

                    Insertion Sort Visualization
                </div>
                <div className="flex flex-col gap-3">

                    <div className="flex flex-row gap-1">
                        Starting array: {startArr.map((num, idx) => {
                            return <span className="mx-2">{num}</span>
                        })}
                    </div>
                    <div className="flex flex-row gap-1">
                        Sorted array: {arr.map((num, idx) => {
                            return <span className="mx-2">{num}</span>
                        })}
                    </div>

                </div>

            </div>
        </>
    );
}

const historyArrays: number[][] = []

const insSort = (parentArr: number[]): number[] => {

    let sortedArr: number[] = []
    historyArrays.push(sortedArr);

    for (let i = 0; i < parentArr.length; i++) {
        const testElem = parentArr[i]
        let j = sortedArr.length

        while (true) {
            if (j == 0) {
                sortedArr.splice(0, 0, testElem);
                historyArrays.push(structuredClone(sortedArr))
                break;
            }
            else if (testElem > sortedArr[j - 1]) {
                sortedArr.splice(j, 0, testElem);
                historyArrays.push(structuredClone(sortedArr))
                break;
            }
            else {
                j--;
            }
        }

    }
    return sortedArr

}

const startArr = [3, 4, 2, 6, 7, 8, 1, 9, 5, 10]

console.log('sorted:', insSort(startArr))
console.log('all arrays', historyArrays)

const Rectangle = ({ length, isTarget }: { length: number, isTarget: boolean }) => {
    const boxHeight = length * 20;
    const color = isTarget ? "#CD5C5C" : "#6495ED"
    return (
        <div style={{ height: boxHeight, backgroundColor: color }} className="w-[25px]">

        </div>
    )

}

export default Insertion