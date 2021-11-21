import {useState, useEffect } from 'react'

const useMousePostion = () => {
    const [positions, setPositions] = useState({x:0, y: 0})

    useEffect(() => {
        const updateMouse = (event) => {
            // console.log('inner')
            setPositions({x: event.clientX, y: event.clientY})
        }

        // console.log('add Listener')
        document.addEventListener('mousemove', updateMouse )

        return () => { // 组件卸载时触发。如果返回一个函数，react在执行清除时操作它，清除副作用
            // console.log('remove listener')
            document.removeEventListener('mousemove', updateMouse )
        }
    })

    return positions
}

export default useMousePostion