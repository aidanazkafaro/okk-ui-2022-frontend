import React from 'react'
import hasil from "../../assets/hasil.png";


const HasilCariKelompok = ({ props }) => {

    console.log(props);
    return (

        <div className="relative flex items-center justify-center mt-20 md:mt-0">
            <img alt="hasil" src={hasil} />
            <h3 id="hasilPencarian" className="absolute w-3/4 text-3xl sm:text-4xl md:text-3xl text-white font-poppins font-bold">
                mini {props}
            </h3>
        </div>

    )

}

export default HasilCariKelompok