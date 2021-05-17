import React from 'react'
import { useEffect, useState } from 'react'
import DisplayData from "./DisplayData"
function Home() {
    const [result, setResult] = useState([])
    const [page, setPage] = useState([])
    const [pageNumber, setPageNumber] = useState(10)
    const [filterData, setFilterData] = useState([])
    useEffect(async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res = await data.json();
        console.log(res);
        // res.slice(0, 10)
        setResult(res)
        let len = res.length / pageNumber
        let arr = new Array(len);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = i + 1
        }
        setPage(arr)
        setFilterData(res.slice(0, 10))
        return () => {

        }
    }, [])
    // console.log(result);
    let buttonData = (data) => {
        console.log(data);
        if (data === 1) {
            let dataToDisplay = result.slice(0, 10);
            // console.log(start, end);
            console.log(dataToDisplay);
            setFilterData(dataToDisplay)
        } else {
            // console.log(data * 10);
            let date = data * pageNumber;
            let start = date - pageNumber;
            let end = date;
            console.log(start, end);
            let dataToDisplay = result.slice(start, end);
            console.log(dataToDisplay);
            setFilterData(dataToDisplay)
        }
    }
    return (
        <div className="App"><br /><br />
            <DisplayData filterData={filterData} />
            <br />
            {
                page.map((data) => {
                    return (
                        <button onClick={() => buttonData(data)} key={data}>{data}</button>
                    )
                })
            }
            <br /><br /><br /><br />
        </div>
    );
}

export default Home
