import React, {useState, useEffect } from 'react'
import axios from 'axios'

const useUrlLoader = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const style = {
        width: 200
    }

    useEffect(() => {
        setLoading(true)
        axios.get(url).then((response) => {
            console.log(response);
            setData(response.data.message)
            setLoading(false)
        })
    }, [url]) // 第二个参数为[] 表示不依赖任何项，这样不会重复执行,加入fetcher进行监听

    return [data, loading ]

}

export default useUrlLoader