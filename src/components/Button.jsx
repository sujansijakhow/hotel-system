import React from 'react'

const Button = ({
    name,
    height,
    width,
}) => {
    return (
        <div>
            <button className={`bg-primary rounded-md w-${width} font-medium text-white text-[14px] border p-1`}>{name}</button>

        </div>
    )
}

export default Button