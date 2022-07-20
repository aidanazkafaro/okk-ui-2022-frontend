import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import "./Merch.css";


const Merch = () => {

    useEffect(() => {

    }, []);

    const styleData = {
        div: "",
        img: ""
    }
    const [valStyle, setValStyle] = useState(styleData);

    var prevDiv;
    var prevImg;

    const handleFocus = (e) => {



        console.log(valStyle.div);
        console.log(valStyle.img);

        var divS = valStyle.div;
        var imgS = valStyle.img;
        if (prevDiv != undefined || prevImg != undefined) {
            document.getElementById(prevDiv).style.flex = "1";
            document.getElementById(prevImg).style.width = "200%";
            document.getElementById(prevImg).style.height = "calc(100% - 10vh)";
        }


        document.getElementById(divS).style.flex = "1 1 50%";
        document.getElementById(imgS).style.width = "100%";
        document.getElementById(imgS).style.height = "100%";

        prevDiv = valStyle.div;
        prevImg = valStyle.img;

    }

    return (
        <>
            <div className="container">
                <div className="box" id="div1" onClick={function (e) { setValStyle({ ...data, div: "div1", img: "img1" }); handleFocus() }}>
                    <img id="img1" src="https://source.unsplash.com/1000x800" />
                    <span>CSS</span>
                </div>
                <div class="box" id="div2" onClick={function (e) { setValStyle({ ...data, div: "div2", img: "img2" }); handleFocus() }}>
                    <img id="img2" src="https://source.unsplash.com/1000x802" />
                    <span>Image</span>
                </div>
                <div class="box" onClick={handleFocus}>
                    <img src="https://source.unsplash.com/1000x804" />
                    <span>Hover</span>
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x806" />
                    <span>Effect</span>
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x806" />
                    <span>Effect</span>
                </div>

            </div>
            <div class="container">
                <div class="box">
                    <img src="https://source.unsplash.com/1000x800" />
                    <span>CSS</span>
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x802" />
                    <span>Image</span>
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x804" />
                    <span>Hover</span>
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x806" />
                    <span>Effect</span>
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x806" />
                    <span>Effect</span>
                </div>

            </div>
        </>
    )
}

export default Merch;