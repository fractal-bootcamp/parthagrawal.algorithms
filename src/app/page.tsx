"use client"
import { useEffect, useState } from "react";
import { bubbleSortStep } from "./algorithms/bubbleSort";
import { Are_You_Serious } from "next/font/google";
import { setDefaultHighWaterMark } from "stream";

export default function Home() {
  const startArr = [3, 4, 5, 6, 7, 8, 1, 9, 2, 10]
  // const { arr } = bubbleSort(startArr)
  const [arr, setArr] = useState<number[]>(structuredClone(startArr))
  const [sorted, setSorted] = useState(false);
  const [step, setStep] = useState(0);
  // const [stepMetadata, setStepMetadata] = useState<{
  //   step: number;
  //   swapped: boolean
  // }>({
  //   swapped: false,
  //   step: 0

  // })

  useEffect(() => {
    const { newArr, swapped } = bubbleSortStep(arr, step)

    if (step < arr.length) {
      setArr(newArr);
      if (swapped) setSorted(false);

      setTimeout(() => {
        setStep(step + 1)
      }, 50)
    } else {
      if (!sorted) {
        setSorted(true)
        setStep(0)
      }
    }


    // if arr.length && swapped == true restart

  }, [step]) // arr as dependency? 

  return (
    <>
      <div>

        Gonna visualize bubble sorts
        <div>
          {startArr.map((num) => {
            return <span key={num} className="mx-2" >{num}</span>
          })}
        </div>
        <div>
          {arr.map((num) => {
            return <span key={num} className="mx-2" >{num}</span>
          })}
        </div>
      </div>
    </>
  );
}
