import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./CariKelompok.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "./CariKelompok.styled";
import hasil from "../../assets/hasil.png";
import axios from "axios";

//var jsonObj = require("../../assets/json/datamaba.json");
var Recaptcha = require('react-recaptcha');

const CariKelompok = () => {

  const verifiedState = { isVerified: false };

  const [valNpm, setValNpm] = useState("");
  const [valLine, setValLine] = useState("");
  const [valInput1, setValInput1] = useState("flex");
  const [valInput2, setValInput2] = useState("none");
  const [check, setCheck] = useState(true);
  const [data, setData] = useState(verifiedState);
  const notifyNPM = () => toast("⚠ Masukkan NPMmu terlebih dahulu!");
  const notifyLine = () => toast("⚠ Masukkan ID LINEmu terlebih dahulu!");
  const notifyVerified = () => toast("⚠ Verifikasi Captcha terlebih dahulu!");
  const captchaExpired = () => toast("⚠ Captcha expired!");

  let recaptchaInstance;

  //let dataHasil;

  useEffect(() => {
    document.getElementById("hasilPencarian").style.display = "none";
  }, []);

  // specifying your onload callback function
  var callback = function () {
    console.log('Done!!!!');
  };

  // specifying verify callback function
  var verifyCallback = function (response) {
    console.log(response);
    if (response) {
      setData({
        ...data,
        isVerified: true
      })
    }
  };

  var expiredCallback = function () {

    captchaExpired();
    setData({
      ...data,
      isVerified: false
    })

  };

  const resetRecaptcha = () => {

    recaptchaInstance.reset();
    setData({
      ...data,
      isVerified: false
    })
  };

  const handleRadioChange = () => {
    if (valInput1 === "none") {
      setValInput1("flex");
      setValInput2("none");
      setCheck(true);
    } else {
      setValInput1("none");
      setValInput2("flex");
      setCheck(false);
    }
  };

  const handleSubmitNpm = (e) => {
    e.preventDefault();
    resetRecaptcha();
    document.getElementById("hasilAwal").style.display = "flex";
    document.getElementById("hasilPencarian").style.display = "none";
    document.getElementById("cariKelompokText").innerHTML = "Pencarian kelompok akan dibuka tanggal 14 Juli 2022";
    return;
    if (valNpm === "") {

      notifyNPM();

    } else if (data.isVerified === false) {

      notifyVerified();

    } else {

      axios
        .post("https://okkui2022backend.herokuapp.com/npm", {
          npm: valNpm,
        })
        .then(function (response) {
          if (response.data.npm !== undefined) {
            menampilkanHasil(response.data);
          } else {
            document.getElementById("hasilAwal").style.display = "flex";
            document.getElementById("hasilPencarian").style.display = "none";
            document.getElementById("cariKelompokText").innerHTML =
              "Maaf, pencarian tidak ditemukan :(";
          }
        })
        .catch(function (error) {
          console.error(error);
        });

      /*  JIKA MENGGUNAKAN JSON MAKA PAKAI CODE DIBAWAH INI */

      // dataHasil = undefined;
      // resetRecaptcha();
      // for (let i = 0; i < jsonObj.maba.length; i++) {
      //   if (jsonObj.maba[i].npm === null || jsonObj.maba[i].npm === undefined) {
      //     continue;
      //   }
      //   if (jsonObj.maba[i].npm.toString() === valNpm) {

      //     dataHasil = jsonObj.maba[i];
      //     break;
      //   }
      // }
      // if (dataHasil !== undefined && dataHasil !== null) {
      //   //menampilkanHasil(dataHasil);
      //   document.getElementById("hasilAwal").style.display = "flex";
      //   document.getElementById("hasilPencarian").style.display = "none";
      //   document.getElementById("cariKelompokText").innerHTML = "Pencarian kelompok akan dibuka tanggal 13 Juli 2022";
      // } else {
      //   document.getElementById("hasilAwal").style.display = "flex";
      //   document.getElementById("hasilPencarian").style.display = "none";
      //   document.getElementById("cariKelompokText").innerHTML =
      //     "Maaf, pencarian tidak ditemukan :(";
      //     document.getElementById("cariKelompokText").innerHTML = "Pencarian kelompok akan dibuka tanggal 13 Juli 2022";
      // }
    }
  };

  const handleSubmitLine = (e) => {
    e.preventDefault();
    document.getElementById("hasilAwal").style.display = "flex";
    document.getElementById("hasilPencarian").style.display = "none";
    document.getElementById("cariKelompokText").innerHTML = "Pencarian kelompok akan dibuka tanggal 14 Juli 2022";
    return;
    resetRecaptcha();
    if (valLine === "") {
      notifyLine();
    } else if (data.isVerified === false) {

      notifyVerified();

    } else {

      axios
        .post("https://okkui2022backend.herokuapp.com/line", {
          id_line: valLine,
        })
        .then(function (response) {
          if (response.data.id_line !== undefined) {
            menampilkanHasil(response.data);
          } else {
            document.getElementById("hasilAwal").style.display = "flex";
            document.getElementById("hasilPencarian").style.display = "none";
            document.getElementById("cariKelompokText").innerHTML =
              "Maaf, pencarian tidak ditemukan :(";
          }
        })
        .catch(function (error) {
          console.error(error);
        });

      /*  JIKA MENGGUNAKAN JSON MAKA PAKAI CODE DIBAWAH INI */

      // dataHasil = undefined;
      // resetRecaptcha()
      // console.log(valLine);
      // for (let i = 0; i < jsonObj.maba.length; i++) {
      //   if (jsonObj.maba[i].id_line === null || jsonObj.maba[i].id_line === undefined) {
      //     continue;
      //   }
      //   if (jsonObj.maba[i].id_line.toString() === valLine) {

      //     dataHasil = jsonObj.maba[i];
      //     break;
      //   }
      // }

      // if (dataHasil !== undefined && dataHasil !== null) {
      //   //menampilkanHasil(dataHasil);
      //   document.getElementById("hasilAwal").style.display = "flex";
      //   document.getElementById("hasilPencarian").style.display = "none";
      //   document.getElementById("cariKelompokText").innerHTML = "Pencarian kelompok akan dibuka tanggal 13 Juli 2022";
      // } else {
      //   document.getElementById("hasilAwal").style.display = "flex";
      //   document.getElementById("hasilPencarian").style.display = "none";
      //   document.getElementById("cariKelompokText").innerHTML =
      //     "Maaf, pencarian tidak ditemukan :(";
      //   document.getElementById("cariKelompokText").innerHTML = "Pencarian kelompok akan dibuka tanggal 13 Juli 2022";
      // }
    }
  };

  const menampilkanHasil = (response) => {
    console.log(response.data);

    document.getElementById("hasilAwal").style.display = "none";
    document.getElementById("hasilPencarian").style.display = "flex";

    document.getElementById("nomorKelompok").innerHTML =
      response.nomor_kelompok;

    var mentor1 = response.nama_mentor1;
    var mentor2 = response.nama_mentor2;

    var whitespace = 0;

    var mentor1Strip = [];
    for (let i = 0; i < mentor1.length; i++) {
      if (mentor1[i] === " ") {
        whitespace++;
      }
      if (whitespace < 2) {
        mentor1Strip.push(mentor1[i]);
      } else {
        break;
      }
    }

    var mentor2Strip = [];
    whitespace = 0;
    for (let i = 0; i < mentor2.length; i++) {
      if (mentor2[i] === " ") {
        whitespace++;
      }
      if (whitespace < 2) {
        mentor2Strip.push(mentor2[i]);
      } else {
        break;
      }
    }

    document.getElementById("mentor1").innerHTML = mentor1Strip.join("");
    document.getElementById("mentor2").innerHTML = mentor2Strip.join("");

    document.getElementById("idLineMentor1").innerHTML = response.id_line_mentor1;
    document.getElementById("idLineMentor2").innerHTML = response.id_line_mentor2;

    document.getElementById("noTelpMentor1").innerHTML = response.nomor_wa_mentor1;
    document.getElementById("noTelpMentor2").innerHTML = response.nomor_wa_mentor2;

  };



  return (
    <>
      <div className="main-sect min-w-[350px]">
        <div className="rounded-3xl bg-[#364130] input sm:pt-10 px-10 md:px-2 lg:px-10 aspect-square flex items-center justify-center mb-10 lg:mb-16 xl:mb-20">
          <div>
            <h2
              className="text-3xl 2xl:text-5xl
          font-semibold font-signika text-white border-b-8 border-[#E1AA43] rounded"
            >
              Cari Berdasarkan:
            </h2>
            <div className="input">
              <div className="my-8">
                <div className="flex items-center gap-4 mb-4">
                  <input
                    checked={check}
                    onChange={handleRadioChange}
                    type="radio"
                    value="NPM"
                    className="cursor-pointer text-3xl radiobutton"
                    name="input"
                    id="npm"
                  />
                  <div>
                    <label
                      for="npm"
                      className="cursor-pointer label text-white text-3xl font-signika 2xl:text-5xl"
                    >
                      {" "}
                      NPM{" "}
                    </label>
                  </div>
                </div>
                <Form
                  prop={valInput1}
                  onSubmit={handleSubmitNpm}
                  className="gap-4 flex items-center desc"
                >
                  <input
                    type="text"
                    pattern="[0-9]*"
                    value={valNpm}
                    onChange={(e) =>
                      setValNpm((v) =>
                        e.target.validity.valid ? e.target.value : v
                      )
                    }
                    placeholder="Masukkan NPM di sini..."
                    className="border-4 border-[#E1AA43] rounded-3xl px-10 py-3 text-xs mr-4"
                  />

                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="hover:bg-[#E7BB68] duration-500 rounded-full p-4 bg-[#E1AA43] rounded-50"
                    onClick={handleSubmitNpm}
                  />

                </Form>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <input
                    checked={!check}
                    onChange={handleRadioChange}
                    type="radio"
                    value="NPM"
                    className="cursor-pointer radiobutton2"
                    name="input"
                    id="line"
                  />
                  <div className="flex flex-col">
                    <label
                      for="line"
                      className="cursor-pointer label2 text-white text-3xl font-signika 2xl:text-5xl"
                    >
                      {" "}
                      ID LINE{" "}
                    </label>
                  </div>
                </div>
                <Form
                  prop={valInput2}
                  onSubmit={handleSubmitLine}
                  className="gap-4 flex items-center desc2"
                >
                  <input
                    type="text"
                    placeholder="Masukkan ID Line di sini..."
                    className="border-4 border-[#E1AA43] rounded-3xl px-10 py-3 text-xs mr-4 md:mr-0 lg:mr-4"
                    val={valLine}
                    onChange={(e) =>
                      setValLine((v) =>
                        e.target.validity.valid ? e.target.value : v
                      )
                    }
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={handleSubmitLine}
                    className="hover:bg-[#E7BB68] duration-500 rounded-full p-4 bg-[#E1AA43] rounded-50"
                  />
                </Form>
              </div>
              <Recaptcha
                ref={e => recaptchaInstance = e}
                sitekey="6LfoEtwgAAAAAPjMkiNv2cchLOsyn9iJDTLnwgSs"
                render="explicit"
                verifyCallback={verifyCallback}
                onloadCallback={callback}
                expiredCallback={expiredCallback}
              />
            </div>
          </div>
        </div>

        {/* <div id="hasilPencarian" className="pict">
        <div className="relative flex items-center justify-center mt-20 md:mt-0">
          <img alt="hasil" src={hasil} />
          <h3 className="absolute posNoKelText defFont text-white text-2xl lg:text-2xl sm:text-xl  ">
            Nomor Kelompokmu
          </h3>
          <h3 id="nomorKelompok" className="absolute posNoKel defFont text-white text-2xl lg:text-8xl sm:text-xl  ">
            10
          </h3>

          <h3 className="absolute posMentor defFont text-white text-2xl lg:text-2xl sm:text-xl  ">
            Mentor
          </h3>


          <div className="absolute posMentor12">
            <h3 id="mentor1" className="defFont text-white text-2xl lg:text-4xl sm:text-xl">JOhn Doe</h3>
            <br></br>
            <h3 id="mentor2" className="defFont text-white text-2xl lg:text-4xl sm:text-xl">DoeJohn</h3>
          </div>

        </div>
      </div> */}

        <div id="hasilAwal" className="pict">
          <div className="relative flex items-center justify-center mt-20 md:mt-0">
            <img alt="hasil" src={hasil} />
            <h3
              id="cariKelompokText"
              className="absolute w-3/4 text-2xl xl:text-2xl sm:text-4xl md:text-lg 2xl:text-4xl text-white font-poppins font-bold"
            >
              Cari Kelompokmu
            </h3>
          </div>
        </div>

        <div id="hasilPencarian" className="pict">
          <div className="relative flex items-center justify-center mt-20 md:mt-0 iair:mt-0">
            <img alt="hasil" src={hasil} />
            <div className="absolute items-center justify-center top-14 2xl:top-1/4 lg:top-[18%] md:top-[28%] sm:top-[12%] iair:top-10 imini:top-10 left-[15%] 2xl:left-[18%] lg:left-[15%] md:left-[16%] sm:left-[20%]">
              <h3 className="text-base 2xl:text-3xl lg:text-lg md:text-xs sm:text-2xl se:text-sm s8:text-sm iair:text-sm imini:text-xs text-white font-poppins font-bold ">
                Nomor Kelompokmu
              </h3>
              <h3
                id="nomorKelompok"
                className="text-left defFont text-white pl-20 2xl:pr-5 2xl:pl-[20%] lg:pl-[40%] md:pl-[28%] se:pr-16 text-4xl 2xl:text-8xl lg:text-4xl md:text-xl sm:text-6xl se:text-2xl imini:text-xl"
              >
                10
              </h3>
              <br></br>

              <h3 className="defFont text-white text-base 2xl:text-2xl lg:text-base md:text-xs se:text-sm s8:text-sm">
                Mentor:
              </h3>

              <div className="flex">
                <h3
                  id="mentor1"
                  className="defFont text-white text-lg 2xl:text-3xl lg:text-lg md:text-xs sm:text-2xl se:text-base s8:text-base iair:text-base imini:text-base iair:px-2"
                >
                  Mentor1
                </h3>
                <br></br>

                <h3 className="lineFonts text-white text-2xl 2xl:text-4xl lg:text-xl md:text-base sm:text-2xl se:text-xl s8:text-xl iair:text-xl imini:text-lg pl-2 2xl:pl-5 lg:pl-2 md:pl-1">
                  {" "}
                  
                </h3>
                <div>
                  <h3
                    id="idLineMentor1"
                    className="defFont text-white text-xl 2xl:text-3xl lg:text-xl md:text-sm sm:text-2xl se:text-lg s8:text-lg iair:text-base imini:text-base pr-4 se:pr-4 iair:px-2 imini:pr-4"
                  >
                    idLineMentor1
                  </h3>
                  <h3
                    id="noTelpMentor1"
                    className="defFont text-white text-lg 2xl:text-xl lg:text-base md:text-xs sm:text-xl se:text-base s8:text-base iair:text-sm imini:text-xs pr-4 se:pr-4 iair:px-3 imini:pr-4"
                  >
                    081278787362
                  </h3>
                </div>
              </div>

              <div className="flex">
                <h3
                  id="mentor2"
                  className="defFont text-white text-lg 2xl:text-3xl lg:text-lg md:text-xs sm:text-2xl se:text-base s8:text-base iair:text-base imini:text-base iair:px-2"
                >
                  Mentor2
                </h3>
                <br></br>

                <h3 className="lineFonts text-white text-2xl 2xl:text-4xl lg:text-xl md:text-base sm:text-2xl se:text-xl s8:text-xl iair:text-xl imini:text-lg pl-2 2xl:pl-5 md:pl-1">
                  {" "}
                  
                </h3>
                <div>
                  <h3
                    id="idLineMentor2"
                    className="defFont text-white text-xl 2xl:text-3xl lg:text-xl md:text-sm sm:text-2xl se:text-lg s8:text-lg iair:text-base imini:text-base pr-4 se:pr-4 iair:px-2 imini:pr-4"
                  >
                    idLineMentor2
                  </h3>
                  <h3
                    id="noTelpMentor2"
                    className="defFont text-white text-lg 2xl:text-xl lg:text-base md:text-xs sm:text-xl se:text-base s8:text-base iair:text-sm imini:text-xs pr-4 se:pr-4 iair:px-3 imini:pr-4"
                  >
                    081278787362
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          hideProgressBar
          toastStyle={{
            backgroundColor: "crimson",
            color: "white",
            fontSize: "12",
          }}
          autoClose={3000}
        />
      </div>
    </>
  );
};

export default CariKelompok;