"use client"
import { useEffect, useState } from "react";
import { bubbleSortStep } from "./algorithms/bubbleSort";
import { Are_You_Serious } from "next/font/google";
import { setDefaultHighWaterMark } from "stream";

export default function Home() {
  const startArr = [3, 4, 5, 6, 7, 8, 1, 2, 9, 10]
  // const { arr } = bubbleSort(startArr)
  const [arr, setArr] = useState<number[]>(structuredClone(startArr))
  const [step, setStep] = useState<number>(0)
  const [sorted, setSorted] = useState<boolean>(false)

  useEffect(() => {
    if (step < arr.length && !sorted) {
      const { newArr, swapped } = bubbleSortStep(arr, step)

      setTimeout(() => setArr(newArr), 1000)
      console.log('swapped:', swapped)
      if (swapped) { //this restarts the sort if there was a swap
        setStep(0)
      }
      else {
        setStep(step + 1)
      }

    }


    console.log('array sorted')

  }, [arr]) // arr as dependency? 

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
