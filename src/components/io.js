import { useState } from "react";

const Io = () => {
    let [text, setText] = useState("");
    let [finalStr, setFinalStr] = useState("");
    let punctuation = [".", "!", "?"];

    function decrypt(msg) {
        let decrypted = "";
        for(let i = 0; i < msg.length; i++) {
            // Check if char is punctuation
            for(let punc of punctuation) {
                if(msg[i] === punc) {
                    if(msg[i-1] === " ") decrypted += "1";
                    else decrypted += "0";
                }
            }
        }
        return decrypted;
    }

    function handleChange(event) {
        setText(decrypt(event.target.value));
    }

    function handleFinalStr() {
        setFinalStr(finalStr += String.fromCharCode(parseInt(text,2)));
    }

    return (
        <>
            <div className="input">
                <textarea cols="30" rows="8" onChange={handleChange} type="text"></textarea>
            </div>
            <div className="output">
                <p>
                    {/* Punctuation decryption */}
                    Binary: {text}
                    <br/>
                    Text: {String.fromCharCode(parseInt(text,2))}
                    <br/>
                    Result: {finalStr}
                </p>
                <button onClick={handleFinalStr}>Add result</button>
            </div>
        </>
    );
}

export default Io;