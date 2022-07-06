import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./CariKelompok.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "./CariKelompok.styled";
import hasil from "../../assets/hasil.png";
import lineBrands from "../../assets/line-brands.svg";
import axios from "axios";

const CariKelompok = () => {
  const [valNpm, setValNpm] = useState("");
  const [valLine, setValLine] = useState("");
  const [valInput1, setValInput1] = useState("flex");
  const [valInput2, setValInput2] = useState("none");
  const [check, setCheck] = useState(true);
  const notifyNPM = () => toast("⚠ Masukkan NPMmu terlebih dahulu!");
  const notifyLine = () => toast("⚠ Masukkan ID LINEmu terlebih dahulu!");

  useEffect(() => {
    document.getElementById("hasilPencarian").style.display = "none";
  }, []);

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
    if (valNpm === "") {
      notifyNPM();
    } else {
      console.log(valNpm);
      axios
        .post("http://localhost:5500/npm", {
          npm: valNpm,
        })
        .then(function (response) {
          if (response.data.npm != undefined) {
            menampilkanHasil(response);
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
    }
  };

  const handleSubmitLine = (e) => {
    e.preventDefault();
    if (valLine === "") {
      notifyLine();
    } else {
      console.log(valNpm);
      axios
        .post("http://localhost:5500/line", {
          id_line: valLine,
        })
        .then(function (response) {
          if (response.data.id_line != undefined) {
            menampilkanHasil(response);
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
    }
  };

  const menampilkanHasil = (response) => {
    console.log(response.data);

    document.getElementById("hasilAwal").style.display = "none";
    document.getElementById("hasilPencarian").style.display = "flex";

    document.getElementById("nomorKelompok").innerHTML =
      response.data.nomor_kelompok;

    var mentor1 = response.data.nama_mentor1;
    var mentor2 = response.data.nama_mentor2;

    var whitespace = 0;

    var mentor1Strip = [];
    for (let i = 0; i < mentor1.length; i++) {
      if (mentor1[i] == " ") {
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
      if (mentor2[i] == " ") {
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

    document.getElementById("idLineMentor1").innerHTML =
      response.data.id_line_mentor1;
    document.getElementById("idLineMentor2").innerHTML =
      response.data.id_line_mentor2;

    document.getElementById("noTelpMentor1").innerHTML =
      response.data.nomor_wa_mentor1;
    document.getElementById("noTelpMentor2").innerHTML =
      response.data.nomor_wa_mentor2;
  };

  const handleInputNPM = () => {
    if (valNpm === "") {
      notifyNPM();
    }
  };

  const handleInputLine = () => {
    if (valLine === "") {
      notifyLine();
    }
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
              className="absolute w-3/4 text-3xl sm:text-4xl md:text-3xl text-white font-poppins font-bold"
            >
              Cari Kelompok Mu
            </h3>
          </div>
        </div>

        <div id="hasilPencarian" className="pict">
          <div className="relative flex items-center justify-center mt-20 md:mt-0">
            <img alt="hasil" src={hasil} />
            <div className="absolute items-center justify-center top-10 lg:top-20 md:top-20 iair:top-10 imini:top-10 left-14 lg:left-20 md:left-8">
              <h3 className="text-base lg:text-3xl md:text-xs se:text-sm s8:text-sm iair:text-sm imini:text-xs text-white font-poppins font-bold ">
                Nomor Kelompokmu
              </h3>
              <h3
                id="nomorKelompok"
                className="text-left defFont text-white pl-20 lg:pr-5 lg:pl-32 se:pr-16 text-4xl lg:text-8xl md:text-xl se:text-2xl imini:text-xl"
              >
                10
              </h3>
              <br></br>

              <h3 className="defFont text-white text-base lg:text-2xl md:text-xs se:text-sm s8:text-sm">
                Mentor:
              </h3>

              <div className="flex">
                <h3
                  id="mentor1"
                  className="defFont text-white text-lg lg:text-3xl md:text-base se:text-base s8:text-base iair:text-base imini:text-base iair:px-2"
                >
                  Mentor1
                </h3>
                <br></br>

                <h3 className="lineFonts text-white text-2xl lg:text-4xl md:text-xl se:text-xl s8:text-xl iair:text-xl imini:text-lg pl-2 lg:pl-5 md:pl-1">
                  {" "}
                  
                </h3>
                <div>
                  <h3
                    id="idLineMentor1"
                    className="defFont text-white text-xl lg:text-3xl se:text-lg s8:text-lg iair:text-base imini:text-base pr-4 se:pr-4 iair:px-2 imini:pr-4"
                  >
                    idLineMentor1
                  </h3>
                  <h3
                    id="noTelpMentor1"
                    className="defFont text-white text-lg lg:text-xl se:text-base s8:text-base iair:text-sm imini:text-xs pr-4 se:pr-4 iair:px-3 imini:pr-4"
                  >
                    081278787362
                  </h3>
                </div>
              </div>

              <div className="flex">
                <h3
                  id="mentor2"
                  className="defFont text-white text-lg lg:text-3xl md:text-base se:text-base s8:text-base iair:text-base imini:text-base iair:px-2"
                >
                  Mentor2
                </h3>
                <br></br>

                <h3 className="lineFonts text-white text-2xl lg:text-4xl md:text-xl se:text-xl s8:text-xl iair:text-xl imini:text-lg pl-2 lg:pl-5 md:pl-1">
                  {" "}
                  
                </h3>
                <div>
                  <h3
                    id="idLineMentor2"
                    className="defFont text-white text-xl lg:text-3xl se:text-lg s8:text-lg iair:text-base imini:text-base pr-4 se:pr-4 iair:px-2 imini:pr-4"
                  >
                    idLineMentor2
                  </h3>
                  <h3
                    id="noTelpMentor2"
                    className="defFont text-white text-lg lg:text-xl se:text-base s8:text-base iair:text-sm imini:text-xs pr-4 se:pr-4 iair:px-3 imini:pr-4"
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
