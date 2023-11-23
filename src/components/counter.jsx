import React, { useEffect, useRef, useState } from 'react'

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
                ref={textRef}
            />
            {
                isClear ? (
                    <button className="disabled">Clear</button>
                ) : (
                    <button onClick={handleClear} className="clear">Clear</button>
                )
            }
            <div className="count-group">
                <button className="character">Character Count: {charCount}</button>
                <button className="word">Word Count: {wordCount}</button>
            </div>
        </form>

    )
}

export default Counter