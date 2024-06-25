"use client"
import { useEffect, useState } from "react"
import quickSortHistory from "./quicksort";

export const QuickSortVisualizer = () => {
    const [startArr, setStart] = useState([3, 4, 5, 6, 7, 8, 1, 9, 2, 10])
    const [step, setStep] = useState(0);
    // const [history, setHistory] = useState<number[][]>([startArr])
    const [displayArr, setDisplayArr] = useState<number[]>(startArr) //maybe initialize this to 0


    const history: number[][] = quickSortHistory([structuredClone(startArr)])
    // setHistory(quickSortHistory(history))

    useEffect(() => {

        if (step < history.length) {
            setDisplayArr(structuredClone(history[step]))
            setTimeout(() => setStep(step + 1), 1000)
        }

    }, [step])


    return (
        <>
            <div className="h-full flex flex-col justify-center items-center gap-5">

                <div className="text-xl font-bold">

                    Quick Sort Visualization
                </div>
                <div className="flex flex-col gap-3">

                    <div className="flex flex-row gap-1">
                        Starting array: {startArr.map((num, idx) => {
                            return <Rectangle key={idx} isTarget={false} length={num} />
                        })}
                    </div>
                    <div className="flex flex-row gap-1">
                        Sorted array:
                        {displayArr.map((num, idx) => {
                            return (
                                <Rectangle key={idx} length={num} isTarget={true} />
                            )
                        })}
                    </div>


                </div>

                <p className="m-5 italic">
                    The quick sort algorithm...
                </p>

            </div>
        </>

    )
}

const Rectangle = ({ length, isTarget }: { length: number, isTarget: boolean }) => {
    const boxHeight = length * 20;
    const color = isTarget ? "#CD5C5C" : "#6495ED"
    return (
        <div style={{ height: boxHeight, backgroundColor: color }} className="w-[25px]">

        </div>
    )

}


export default QuickSortVisualizer;