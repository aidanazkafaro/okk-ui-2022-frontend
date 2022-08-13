import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

import './Merch.css'


// basic merch
import baju from '../../assets/merch/baju/kaos_depan.png';
import emblem from '../../assets/merch/emblem/emblem.png';
import gelang from '../../assets/merch/gelang/gelang.png';
import notebook from '../../assets/merch/notebook/notebook_depan.png';
import stiker from '../../assets/merch/stiker/stiker.png';
import topi from '../../assets/merch/topi/topi.png';
import totebag from '../../assets/merch/totebag/totebag.png';
import tumbler from '../../assets/merch/tumbler/tumbler.png';

// merch with actor
import baju_actor from '../../assets/merch/actor/kaos1.jpg';
import notebook_actor from '../../assets/merch/actor/notebook2.jpg';

// basic merch with actor
import kaos2 from '../../assets/merch/actor/kaos2.png';
import emblem1 from '../../assets/merch/actor/emblem1.jpg';
import gelang2 from '../../assets/merch/actor/gelang2.jpg';
import notebook1 from '../../assets/merch/actor/notebook1.jpg';
import sticker1 from '../../assets/merch/actor/sticker1.jpg';
import topi2 from '../../assets/merch/actor/topi2.jpg';
import totebag1 from '../../assets/merch/actor/totebag1.jpg';
import tumbler2 from '../../assets/merch/actor/tumbler2.jpg';

export default function Merch() {

    const openState = {
        openTotebag: false,
        openTumbler: false,
        openTopi: false,
        openGelang: false,
        openStiker: false,
        openNotebook: false,
        openBaju: false,
        openEmblem: false
    };

    const [open, setOpen] = useState(openState);

    const cards = (maxW, cardImg, cardAlt, cardName, cardDetails) => {
        return (
            <Card sx={{ maxWidth: maxW }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={cardImg}
                        alt={cardAlt}
                    />
                    <CardContent>
                        <div className="text-center font-bold text-xs md:text-lg md:text-left lg:text-xl">
                            {cardName}
                        </div>
                        <div className="hidden md:flex">
                            <Typography variant="body2" color="text.secondary">
                                {cardDetails}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    const cardsClick = (maxW, cardImg, cardAlt, cardName, cardDetails) => {
        return (
            <Card sx={{ maxWidth: maxW }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={cardImg}
                        alt={cardAlt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {cardName}
                        </Typography>
                        <div className="">
                            <Typography variant="body2" color="text.secondary">
                                {cardDetails}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    return (
        <div className="merchBody">
            <div className="flex items-right justify-center pt-[4%]">
                <h1 className="font-signika xl:text-5xl md:text-4xl text-3xl font-semibold">
                    OKK UI MERCHANDISE
                </h1>
            </div>
            <div className="flex items-right justify-center pb-[1%]">
                <div className="container xl:w-[600px] md:w-[450px] w-[380px] h-2 mt-1 bg-underlineOrange rounded-xl mb-8" />
            </div>


            <div className="flex justify-center items-center">
                <div className="w-[85%] md:w-[60%]">
                    <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark relative" data-bs-ride="carousel">

                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                                data-bs-target="#carouselDarkVariant"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                data-bs-target="#carouselDarkVariant"
                                data-bs-slide-to="1"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                data-bs-target="#carouselDarkVariant"
                                data-bs-slide-to="2"
                                aria-label="Slide 1"
                            ></button>
                        </div>


                        <div class="carousel-inner relative w-full overflow-hidden">

                            <div class="carousel-item active relative float-left w-full">
                                <img
                                    src={baju_actor}
                                    class="block w-full rounded-lg"
                                    alt="Baju OKK UI 2022"
                                />
                                <div class="carousel-caption hidden md:block absolute text-center">
                                    <h5 class="text-xl text-white">Baju OKK UI 2022</h5>
                                    <p class="text-white">Lihat betapa kerennya mereka saat menggunakan baju OKK UI 2022.</p>
                                </div>
                            </div>


                            <div class="carousel-item relative float-left w-full">
                                <img
                                    src={notebook_actor}
                                    class="block w-full rounded-lg"
                                    alt="Notebook, Tumbler, dan Baju OKK UI"
                                />
                                <div class="carousel-caption hidden md:block absolute text-center">
                                    <h5 class="text-xl text-white">Notebook dan Tumbler</h5>
                                    <p class="text-white">Haus saat mencatat menggunakan notebook? tenang! okk memiliki keduanya.</p>
                                </div>
                            </div>


                            {/* <div class="carousel-item relative float-left w-full">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                                    class="block w-full"
                                    alt="Woman Reading a Book"
                                />
                                <div class="carousel-caption hidden md:block absolute text-center">
                                    <h5 class="text-xl">Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                         */}
                        </div>



                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>



            <section class="overflow-hidden text-gray-700 ">
                <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/3 md:w-1/4">
                            <div class="w-full p-1 md:p-2">
                                <a onClick={() =>
                                    setOpen({
                                        ...open,
                                        openTotebag: true
                                    })
                                }>{cards(400, totebag1, "Totebag", "Totebag", "Bawaanmu banyak? bingung mau bawanya gimana? tenang! dengan totebag OKK UI akan memudahkan kamu dalam membawa barang barang.")}</a>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open.openTotebag}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            openTotebag: false
                                        })
                                    }
                                >
                                    {cardsClick(300, totebag1, "Totebag", "Totebag", "Bawaanmu banyak? bingung mau bawanya gimana? tenang! dengan totebag OKK UI akan memudahkan kamu dalam membawa barang barang.")}
                                </Backdrop>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3 md:w-1/4">
                            <div class="w-full p-1 md:p-2">
                                <a onClick={() =>
                                    setOpen({
                                        ...open,
                                        openGelang: true
                                    })
                                }>{cards(400, gelang2, "Gelang", "Gelang", "Tangan kerasa kosong? ingin menghiasi tangan kamu dengan sesuatu yang keren? pakailah gelang OKK UI!")}</a>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open.openGelang}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            openGelang: false
                                        })
                                    }
                                >
                                    {cardsClick(300, gelang2, "Gelang", "Gelang", "Tangan kerasa kosong? ingin menghiasi tangan kamu dengan sesuatu yang keren? pakailah gelang OKK UI!")}
                                </Backdrop>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3 md:w-1/4">
                            <div class="w-full p-1 md:p-2">
                                <a onClick={() =>
                                    setOpen({
                                        ...open,
                                        openEmblem: true
                                    })
                                }>{cards(400, emblem1, "emblem", "Emblem", "Sebuah emblem yang keren abis.")}</a>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open.openEmblem}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            openEmblem: false
                                        })
                                    }
                                >
                                    {cardsClick(300, emblem1, "emblem", "Emblem", "Sebuah emblem yang keren abis.")}
                                </Backdrop>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3 md:w-1/4">
                            <div class="w-full p-1 md:p-2">
                                <a onClick={() =>
                                    setOpen({
                                        ...open,
                                        openBaju: true
                                    })
                                }>{cards(400, kaos2, "baju", "Baju", "Kamu anak UI tapi belum punya baju OKK UI?!?! NANI!? Segera dapatkan baju OKK UI dan rasakan benefitnya!")}</a>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open.openBaju}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            openBaju: false
                                        })
                                    }
                                >
                                    {cardsClick(300, kaos2, "baju", "Baju", "Kamu anak UI tapi belum punya baju OKK UI?!?! NANI!? Segera dapatkan baju OKK UI dan rasakan benefitnya!")}
                                </Backdrop>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3 md:w-1/4">
                            <div class="w-full p-1 md:p-2">
                                <a onClick={() =>
                                    setOpen({
                                        ...open,
                                        openNotebook: true
                                    })
                                }>{cards(400, notebook1, "notebook", "Notebook", "Bingung dengan catatan kuliah? Cobalah mencatat menggunakan notebook OKK UI ini! Buku ini dipercaya dapat memudahkan dalam belajar.")}</a>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open.openNotebook}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            openNotebook: false
                                        })
                                    }
                                >
                                    {cardsClick(300, notebook1, "notebook", "Notebook", "Bingung dengan catatan kuliah? Cobalah mencatat menggunakan notebook OKK UI ini! Buku ini dipercaya dapat memudahkan dalam belajar.")}
                                </Backdrop>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3 md:w-1/4">
                            <div class="w-full p-1 md:p-2">
                               <a onClick={() =>
                                    setOpen({
                                        ...open,
                                        openTumbler: true
                                    })
                                }>{cards(400, tumbler2, "tumblr", "Tumblr", "Takut kehausan saat jalan-jalan di UI? sekarang kamu bisa menyimpan minuman menggunakantumbler OKKUI! sehingga kamu dapat minum kapanpun dan dimanapun.")}</a>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open.openTumbler}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            openTumbler: false
                                        })
                                    }
                                >
                                    {cardsClick(300, tumbler2, "tumblr", "Tumblr", "Takut kehausan saat jalan-jalan di UI? sekarang kamu bisa menyimpan minuman menggunakantumbler OKKUI! sehingga kamu dapat minum kapanpun dan dimanapun.")}
                                </Backdrop>


                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3 md:w-1/4">
                            <div class="w-full p-1 md:p-2">
                                <a onClick={() =>
                                    setOpen({
                                        ...open,
                                        openStiker: true
                                    })
                                }>{cards(400, sticker1, "stiker", "Stiker", "Bingung cara menunjukkan identitasmu? tenang! dengan stiker OKK UI ini kamu dapat menunjukkan identitas kamu ke orang-orang!")}</a>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open.openStiker}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            openStiker: false
                                        })
                                    }
                                >
                                    {cardsClick(300, sticker1, "stiker", "Stiker", "Bingung cara menunjukkan identitasmu? tenang! dengan stiker OKK UI ini kamu dapat menunjukkan identitas kamu ke orang-orang!")}
                                </Backdrop>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3 md:w-1/4">
                            <div class="w-full p-1 md:p-2">
                                

                                <a onClick={() =>
                                    setOpen({
                                        ...open,
                                        openTopi: true
                                    })
                                }>{cards(400, topi2, "topi", "Topi", "Depok panas?! Tenang saja! dengan topi OKK UI ini kamu akan terlindung dari sinar matahari yang terik.")}</a>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open.openTopi}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            openTopi: false
                                        })
                                    }
                                >
                                    {cardsClick(300, topi2, "topi", "Topi", "Depok panas?! Tenang saja! dengan topi OKK UI ini kamu akan terlindung dari sinar matahari yang terik.")}
                                </Backdrop>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex items-right justify-center p-[4%]">
                <button onClick={() => window.open('http://www.bit.ly/MerchOKKUI2022')} class="button font-bold">
                    <span class="button__text">
                        <span>P</span><span>e</span><span>s</span><span>a</span><span>n</span><span> </span><span>s</span><span>e</span><span>k</span><span>a</span><span>r</span><span>a</span><span>n</span><span>g</span>
                    </span>

                    <svg class="button__svg" role="presentational" viewBox="0 0 600 600">
                        <defs>
                            <clipPath id="myClip">
                                <rect x="0" y="0" width="100%" height="50%" />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#myClip)">
                            <g id="money">
                                <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                                <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            </g>
                            <g id="creditcard">
                                <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                                <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
                                <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                            </g>
                        </g>
                        <g id="wallet">
                            <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#b17247" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#c79b5b" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#c79b5b" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#c79b5b" />
                            <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
                        </g>
                    </svg>
                </button>
            </div>
        </div >
    );
}