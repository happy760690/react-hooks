import React, {useState, useEffect } from 'react'

const MouseTracker = () => {
    const [position, setPosition] = useState({x:0, y: 0})

    useEffect(() => {
        const updateMouse = (event) => {
            console.log('inner')
            setPosition({x: event.clientX, y: event.clientY})
        }

        console.log('add Listener')
        document.addEventListener('click', updateMouse )

        return () => { // 组件卸载时触发。如果返回一个函数，react在执行清除时操作它，清除副作用
            console.log('remove listener')
            document.removeEventListener('click', updateMouse )
        }
    })

    return (
        <p> x: {position.x}, y: {position.y}</p>
    )
}

export default MouseTracker