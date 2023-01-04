import Image from "next/image";
import {useEffect} from "react";
import io from "socket.io-client";
import {Container} from "@mui/material";


const FPS = 16 // => ( 62.5; 50; 40; 32; 31.25; 25; 20; 16 )
const TBF = 1000/FPS //=> TBF = Time Between Frames
console.log("FPS: " + FPS)
console.log("TBF: " + TBF)

const socket = io.connect(`ws://127.0.0.1:5000/camera-feed`);

export default function DartBoard() {
    socket.on('new-frame', message => {
        document.getElementById('camera-frame').setAttribute(
            'src', `data:image/jpeg;base64,${message.base64}`
        );
    });

    useEffect(() => {
        const interval = setInterval(() => {
            socket.emit('request-frame', {});
        }, TBF);
        return () => clearInterval(interval);
    }, []);

    return(
            <img
                style={{
                    height: "70vh",
                }}
                id="camera-frame"
                alt=""
                src="/target-1967285_960_720.png"
            />
    )
}
