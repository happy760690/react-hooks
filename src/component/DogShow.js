import React, {useState, useEffect } from 'react'
import axios from 'axios'

const DogShow = () => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [fetcher, setFetcher] = useState(false)
    const style = {
        width: 200
    }

    useEffect(() => {
        console.log('dogshow useEffect')
        setLoading(true)
        axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
            console.log(response);
            setUrl(response.data.message)
            setLoading(false)
        })
    }, [fetcher]) // 第二个参数为[] 表示不依赖任何项，这样不会重复执行,加入fetcher进行监听

    return (
        <>
        {loading? <p>狗狗读取中</p>
        : <img src={url} alt="dog" style = {style}></img>
        }
        <button onClick={() => {setFetcher(!fetcher)}}>再看一张图片</button>
        </>
    )

}

export default DogShow