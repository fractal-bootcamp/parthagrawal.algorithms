import Link from "next/link";
import BubbleSort from "./bubblesort/page";

const Algorithms = () => {
    return (
        <>
            <div className="h-full w-full flex flex-col gap-3 justify-center items-center">
                <div className="text-2xl font-bold">

                    The Parth Structures and Algorithms
                </div>

                <div className="flex flex-col gap-2 text-md items-center">
                    <div className="italic">
                        Algorithms
                    </div>
                    <div className="flex flex-col underline items-center">

                        <Link href="/algorithms/bubblesort">
                            Bubble sort
                        </Link>
                        <Link href="/algorithms/insertionsort">
                            Insertion sort
                        </Link>
                        <Link href="/algorithms/quicksort">
                            Quick sort (WIP)
                        </Link>

                    </div>

                    <div className="italic">
                        Data Structures
                    </div>
                </div>
            </div>
        </>

    )

}

export default Algorithms;