import React from "react";
import illustration2 from "../../assets/illustration2.png";
import leftTree from "../../assets/pohon-left.png";
import rightTree from "../../assets/pohon-right.png";


const Kontak = () => {
    return (
        <section className="contact-section">
            <div className="text-center py-4">
            <h1 className="w-fit bg-[#F9E1CF] font-signika font-semibold text-6xl mt-8 m-auto rounded-xl shadow-xl px-12 py-4
            sm:bg-white sm:p-0 sm:pb-1 sm:shadow-none sm:rounded sm:my-8 sm:mb-8 sm:border-orange-300 sm:border-b-8">
                Kontak
            </h1>
            
            </div>
            <div className="bg-[#F9E1CF] text-center m-auto p-16 w-fit rounded-xl shadow-xl">
            <article className="contact p-4 hover:shadow hover:rounded-xl hover:bg-[#E1AA43]">
                <p className="contact-name font-semibold">
                    Farah
                </p>
                <p className="contact-number">
                    085716182634
                </p>
            </article>
            <article className="contact p-4 hover:shadow hover:rounded-xl hover:bg-[#E1AA43]">
                <p className="contact-name font-semibold">
                    Shafmed
                </p>
                <p className="contact-number">
                    087770558657
                </p>
            </article>
            <article className="contact p-4 hover:shadow hover:rounded-xl hover:bg-[#E1AA43]">
                <p className="contact-name font-semibold">
                    Yud
                </p>
                <p className="contact-number">
                    085959563107
                </p>
            </article>
            </div>

            <img className="m-auto p-8 w-2/5" alt="" src={illustration2} />
            <img className="left-tree absolute top-0 z-[-1] h-[48rem] sm:h-[60rem]" alt="" src={leftTree} />
            <img className="right-tree absolute top-0 right-0 z-[-1] h-[48rem] sm:h-[60rem]" alt="" src={rightTree} />

        </section>
    );
};

export default Kontak;