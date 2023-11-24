import React, { useEffect, useRef, useState } from 'react'
import './style.css'

const Counter = () => {

    const [isClear, setIsClear] = useState(true);
    const [wordCount, setWordCount] = useState(0)
    const [charCount, setCharCount] = useState(0);
    const textRef = useRef();

    function handleChange() {
        setCharCount(textRef.current.value.length);
        let words = textRef.current.value.trim().split(/\s+/);

        if (words[0] === "") setWordCount(0);
        else setWordCount(words.length);
    }

    function handleClear(e) {
        e.preventDefault();
        textRef.current.value = ""

        setCharCount(textRef.current.value.length)
        setWordCount(0)
    }

    useEffect(() => {

        if (charCount !== 0) setIsClear(false);
        else setIsClear(true);

    }, [charCount])

    return (
        <form className="counter-area">

            <textarea
                onChange={handleChange}
                name="textholder-area"
                rows="7"
                cols="35"
                data-testid = "textarea"
                ref={textRef}
            />
            {
                isClear ? (
                    <button data-testid = "disabled-clear" className="disabled">Clear</button>
                ) : (
                    <button onClick={handleClear} className="clear" data-testid="clearBtn">Clear</button>
                )
            }
            <div className="count-group">
                <button className="character" data-testid ="charCount">Character Count: {charCount}</button>
                <button className="word" data-testid="wordCount">Word Count: {wordCount}</button>
            </div>
        </form>

    )
}

export default Counter