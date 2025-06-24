import type React from 'react'
import '../styles/components/Pagination.scss'

type PropTypes = {
    length: number,
    activePage?: number,
    onClick: (page: number, event?: React.PointerEvent<HTMLButtonElement>) => void
}

const Pagination = ({ length, activePage = 1, onClick }: PropTypes) => {
    const buttons = []
    
    for (let index = 0; index < length; index++) {
        const isActive = index + 1 === activePage
        buttons.push(
            <button
                className={`pagination__button ${isActive ? 'is-active' : ''}`}
                type="button"
                onClick={() => onClick(index + 1)}
                key={index}
            ></button>
        )
    }

    return (
        <div className="pagination">
            {buttons}
        </div>
    )
}

export default Pagination