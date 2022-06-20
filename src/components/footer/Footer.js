import React from 'react'
import Instagram from "../../assets/Instagram.svg"
import Facebook from "../../assets/Facebook.svg"
import Line from "../../assets/Line.svg"
import Tiktok from "../../assets/Tiktok.svg"
import Youtube from "../../assets/Youtube.svg"

const Footer = () => {
  return (
    <>
      <div className="flex justify-between bg-[#E1AA43] p-10">
        <div>
          <div className='lg:text-3xl md:text-sm'>
            <h1>#OKKUI2022</h1>
            <h2>#BersamaBereksplorasi</h2>
          </div>

          <p className="font-bold text-sm pt-[9px]">Contact Person:</p>
          <p className="text-sm">bla | 0822222</p>
          <p className="text-sm">blu | 08333222</p>
          <p className="text-sm pt-2">© 2021 OKK UI</p>
        </div>
        <div className="flex gap-3 mt-32">
            <a target="_blank" href="https://www.tiktok.com/@okk_ui?_d=secCgYIASAHKAESMgowUOPy%2FNpmTPTgKCJ4L%2FINPNYmacxTBwyw1SGwSfXH0bNQyS%2FbLnLCy2STx5xe5WPsGgA%3D&checksum=45cf0ccbb8e39f39146a37d978b7578245920f8c270986dfdc186f1fd6489297&language=en&sec_uid=MS4wLjABAAAAAu5TrSgHTXi3N1vpbHrqxeGDsli2DMMrs_IsV1yVxt-aYngZeHBvcZvA9iXaLSM-&sec_user_id=MS4wLjABAAAAAu5TrSgHTXi3N1vpbHrqxeGDsli2DMMrs_IsV1yVxt-aYngZeHBvcZvA9iXaLSM-&share_app_id=1180&share_author_id=6739022119999456257&share_link_id=F1F7968C-71BC-4D05-855B-FA93466982FE&tt_from=copy&u_code=d8bi35bfm7j07i&user_id=6739022119999456257&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1">
              <img alt="tiktok" className="w-7 h-7" src={Tiktok}></img>
            </a>
            <a target="_blank" href="https://www.instagram.com/okk_ui/">
              <img alt="instagram" className="w-7 h-7" src={Instagram}></img>
            </a>
            <a target="_blank" href="https://liff.line.me/1645278921-kWRPP32q?accountId=okkui&amp;openerPlatform=native&amp;openerKey=home%3Arecommend#mst_challenge=m-gye6CtYl1DdKZEzBpBovW-k5y_HQRuZsYKXNCeFOU">
              <img alt="line" className="w-7 h-7" src={Line}></img>
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCKHfpWWWmXznpsiTswayd0g">
              <img alt="youtube" className="w-7 h-7" src={Youtube}></img>
            </a>
            <a target="_blank" href="https://www.facebook.com/OKK-UI-1667380366904251/">
              <img alt="facebook" className="w-7 h-7" src={Facebook}></img>
            </a>
        </div>
      </div>
    </>
  )
}

export default Footer