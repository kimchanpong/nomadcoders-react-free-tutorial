import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log('created');

        return () => {
            console.log('bye')
        }
    }, [])

    return (
        <h1>Hello</h1>
    )
}

function AppUseEffect() {
    // const [counter, setCounter] = useState(0);
    // const [keyword, setKeyword] = useState("");
    // const onClick = () => {
    //     setCounter((prev) => {
    //         return prev + 1;
    //     })
    // }
    //
    // const onChange = (event) => {
    //     setKeyword(event.target.value);
    // }
    //
    // console.log('APP 실행');
    //
    // useEffect(() => {
    //     console.log('무조건 한번만 실행');
    // }, []);
    //
    // useEffect(() => {
    //     if(keyword !== "" && keyword.length > 5) {
    //         console.log('Search For ', keyword);
    //     }
    // }, [keyword]);
    //
    // useEffect(() => {
    //     console.log('Click: ', counter);
    // }, [counter]);

    const [showing, setShowing] = useState(false);
    const onClick = () => {
        setShowing((prev) => {
           return !prev;
        });
    }

    return (
        <div>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={keyword}*/}
            {/*    onChange={onChange}*/}
            {/*    placeholder="Search here..."*/}
            {/*/>*/}
            {/*<h1>{counter}</h1>*/}
            {/*<button onClick={onClick}>click me</button>*/}
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default AppUseEffect;
