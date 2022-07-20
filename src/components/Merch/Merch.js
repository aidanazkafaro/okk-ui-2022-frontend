import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import baju from '../../assets/merch/baju/kaos_depan.png';
import emblem from '../../assets/merch/emblem/emblem.png';
import gelang from '../../assets/merch/gelang/gelang.png';
import notebook from '../../assets/merch/notebook/notebook_depan.png';
import stiker from '../../assets/merch/stiker/stiker.png';
import topi from '../../assets/merch/topi/topi.png';
import totebag from '../../assets/merch/totebag/totebag.png';
import tumbler from '../../assets/merch/tumbler/tumbler.png';

export default function ActionAreaCard() {
    return (
        <>
            <div className="flex items-right justify-center pt-[2%]">
                <h1 className="font-signika xl:text-5xl md:text-4xl text-3xl font-semibold">
                    OKK UI MERCHANDISE
                </h1>
            </div>
            <div className="flex items-right justify-center pb-[1%]">
                <div className="container xl:w-[600px] md:w-[450px] w-[380px] h-2 mt-1 bg-underlineOrange rounded-xl mb-8" />
            </div>
            <section class="overflow-hidden text-gray-700">
                <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-1/2 p-1 md:p-2">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={totebag}
                                            alt="totebag"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Totebag
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <Card sx={{ maxWidth: 400 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={stiker}
                                            alt="Stiker"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Stiker
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {/*fill with description */}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </div>
                            <div class="w-full p-1 md:p-2">
                                <Card sx={{ maxWidth: 800 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={notebook}
                                            alt="totebag"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Notebook
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Bingung dengan catatan kuliah? Cobalah mencatat menggunakan notebook OKK UI ini! Buku ini dipercaya dapat memudahkan dalam belajar.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-full p-1 md:p-2">
                                <Card sx={{ maxWidth: 650 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={baju}
                                            alt="baju"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Baju OKK UI
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Kamu anak UI tapi belum punya baju OKK UI?!?! NANI!? Segera dapatkan baju OKK UI dan rasakan benefitnya!
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <Card sx={{ maxWidth: 400 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={topi}
                                            alt="totebag"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Topi
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Depok panas?! Tenang saja! dengan topi OKK UI ini kamu akan terlindung dari sinar matahari yang terik.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div class="w-1/2 p-0 md:p-2">
                                <Card sx={{ maxWidth: 270 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={tumbler}
                                            alt="totebag"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Tumblr
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Takut kehausan saat jalan-jalan di UI? sekarang kamu bisa menyimpan minuman menggunakan
                                                tumbler OKKUI! sehingga kamu dapat minum kapanpun dan dimanapun.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}