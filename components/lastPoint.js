import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import io from "socket.io-client";

const socket = io.connect(`ws://127.0.0.1:5000/current-point-feed`);



export default function LastPoint() {

    const [point, setPoint] = useState(0)
    const [multiplier, setMultiplier] = useState(0)

    socket.on('current-point', message => {
        console.log("Message: " + message)
        setPoint(parseInt(message.points))
        setMultiplier(parseInt(message.multiplier))
        //document.getElementById('points').innerHTML = `${message.point}`;
    });

    useEffect(() => {
        socket.emit('request-current-point', {});
        /*
        const interval = setInterval(() => {
            socket.emit('request-frame', {});
        }, TBF);
        return () => clearInterval(interval);
        */
    }, []);

    return(
        <Typography variant={"h3"} color={"error"}>{point}</Typography>
    )
}
