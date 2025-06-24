import { useState } from "react"

type ReturnType<T> = {
    currentData: T[];
    currentPage: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (pageNum: number) => void;
}

function useSlider<T>(slidesData: T[], perPage: number): ReturnType<T> {
    const numPages = Math.ceil(slidesData.length / perPage)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const offset = (currentPage - 1) * perPage
    const currentData = slidesData.slice(offset, offset + perPage)

    function nextPage() {
        setCurrentPage((prev) => {
            const nextPageNum = prev + 1

            return nextPageNum > numPages ? 1 : nextPageNum
        })
    }

    function prevPage() {
        setCurrentPage((prev) => {
            const prevPageNum = prev - 1

            return prevPageNum < 1 ? numPages : prevPageNum
        })
    }

    function setPage(pageNum: number) {
        setCurrentPage(pageNum)
    }

    return {
        currentData,
        currentPage,
        nextPage,
        prevPage,
        setPage,
    }
}

export default useSlider