import Link from "next/link";
import BubbleSort from "./bubblesort/page";

export const Algorithms = () => {
    return (
        <>
            <div className="h-full w-full flex flex-col justify-center items-center">
                This is the algorithms page!
                <Link href="/algorithms/bubblesort">
                    Bubble sort
                </Link>
            </div>
        </>

    )

}

export default Algorithms;