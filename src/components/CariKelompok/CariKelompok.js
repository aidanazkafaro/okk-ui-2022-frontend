import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./CariKelompok.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "./CariKelompok.styled";
import hasil from "../../assets/hasil.png";
import axios from "axios";
import HasilCariKelompok from "./HasilCariKelompok";

const CariKelompok = () => {
  const [valNpm, setValNpm] = useState("");
  const [valLine, setValLine] = useState("");
  const [valInput1, setValInput1] = useState("flex");
  const [valInput2, setValInput2] = useState("none");
  const [notSubmit, setnotSubmit] = useState("flex");
  const [submitted, setSubmitted] = useState("none");
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
        .post(
          "http://localhost:5500/npm",
          {
            npm: valNpm,
          }
        )
        .then(function (response) {

          console.log(response.data);
          document.getElementById("hasilAwal").style.display = "none";
          document.getElementById("hasilPencarian").style.display = "flex";
          



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
    }
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
    <div className="main-sect">
      <div className="rounded-3xl bg-[#364130] input sm:pt-10 px-10 md:px-2 lg:px-10 aspect-square flex items-center justify-center">
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

      <div id="hasilPencarian" className="pict">
        <div prop={notSubmit} className="relative flex items-center justify-center mt-20 md:mt-0">
          <img alt="hasil" src={hasil} />
          <h3 id="hasilPencarian" className="absolute w-3/4 text-3xl sm:text-4xl md:text-3xl text-white font-poppins font-bold">
            heehy asd
          </h3>
        </div>
      </div>
      
   
      <div id="hasilAwal" className="pict">
        <div prop={notSubmit} className="relative flex items-center justify-center mt-20 md:mt-0">
          <img alt="hasil" src={hasil} />
          <h3 id="hasilPencarian" className="absolute w-3/4 text-3xl sm:text-4xl md:text-3xl text-white font-poppins font-bold">
            mariCariKelompokMu
          </h3>
        </div>
      </div>
  
     

      {/* <div id="hasilPencarian" className=" relative flex items-center justify-center pict mt-20 md:mt-0">
        <img alt="hasil" src={hasil} />
        <h3 className="absolute w-3/4 text-3xl sm:text-4xl md:text-3xl text-white font-poppins font-bold">
          Mari cari kelompokmu!
        </h3>
      </div> */}


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
  );
};

export default CariKelompok;
