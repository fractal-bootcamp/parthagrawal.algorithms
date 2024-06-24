import { bubbleSort } from "./algorithms/bubbleSort";

export default function Home() {
  const startArr = [3, 4, 5, 6, 7, 8, 1, 2, 9, 10]
  const { arr } = bubbleSort(startArr)

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
