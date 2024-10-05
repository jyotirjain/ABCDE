import React from "react";
import Bizznavbar from "./bizznavbar";
import { Helmet } from "react-helmet";
import Bizzfooter from "./bizzfooter";
import thankyou from "../../assets/images/bizzneeti/download (7) 1.png";

function Bizzthankyou2() {
  return (
    <div>
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '5740980065984220');
            fbq('track', 'PageView');
          `}
        </script>

        <noscript>
          {`
        <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=5740980065984220&ev=PageView&noscript=1"
      />
        `}
        </noscript>
        <script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "l9c6vjr47o");
          `}
        </script>
      </Helmet>
      <Bizznavbar />
      <div className="flex justify-center py-[60px] px-[40px]">
        <div className="w-full max-w-[1280px] bg-[#4C1145] p-[20px] mt-6 rounded-xl md:h-[700px] flex flex-col justify-center items-center">
          <img src={thankyou} className=" w-[200px] md:w-[300px]" />
          <h2 className=" text-[25px] md:text-[30px] font-[500] text-[#fff] text-center  ">
            Thank You for the payment
          </h2>
          <p className=" text-[18px] md:text-[25px] font-normal text-[#fff] text-center ">
           
          </p>
        </div>
      </div>
      <Bizzfooter />{" "}
    </div>
  );
}

export default Bizzthankyou2;
