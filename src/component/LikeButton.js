import React, {useState, useEffect } from 'react'
// import useMousePostion from '../hooks/useMousePosition'

const LikeButton = () => {

    // const positions = useMousePostion();

    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    // const [obj, setObj] = useState({ like: 0, on: true})

    useEffect(() => {  // 第一次渲染后和每次dom更新后调用
        console.log('likeButton useEffect')
        document.title = `点击了${like}次`
    })

    return (<>
        {/* <p>{positions.y}</p> */}
        <button onClick={() => { setLike(like + 1);console.log(like,'---')}}>
            { like} 哈
        </button>
        <button onClick={() => { setOn(!on)}}>
            {on? 'on': 'off'}
        </button>
    </>)
}

export default LikeButton 