"use client"

import { useState } from "react"

export const Insertion = () => {
    const [startArr, setStart] = useState([3, 4, 5, 6, 7, 8, 1, 9, 2, 10])
    // const { arr } = bubbleSort(startArr)
    const [arr, setArr] = useState<number[]>(structuredClone(startArr))
    // const [sorted, setSorted] = useState(false);
    // const [step, setStep] = useState(0);
    // const [stepMetadata, setStepMetadata] = useState<{
    //   step: number;
    //   swapped: boolean
    // }>({
    //   swapped: false,
    //   step: 0

    // })




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

const Rectangle = ({ length, isTarget }: { length: number, isTarget: boolean }) => {
    const boxHeight = length * 20;
    const color = isTarget ? "#CD5C5C" : "#6495ED"
    return (
        <div style={{ height: boxHeight, backgroundColor: color }} className="w-[25px]">

        </div>
    )

}

export default Insertion