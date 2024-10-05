import React from "react";
import Home from "../Components/bizzneeti/home";
import About from "../Components/bizzneeti/about";
import Speakers from "../Components/bizzneeti/speakers";
import Bizznavbar from "../Components/bizzneeti/bizznavbar";
import Expect from "../Components/bizzneeti/expect";
import Agenda from "../Components/bizzneeti/agenda";
import Tickets from "../Components/bizzneeti/tickets";
import Sponsors from "../Components/bizzneeti/sponsors";
import Bizzfooter from "../Components/bizzneeti/bizzfooter";
import Faq from "../Components/bizzneeti/faq";
import { Helmet } from "react-helmet";
import Attendee from "../Components/bizzneeti/attendee";

function Bizzneeti() {
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
      <Home />
      <About />
      <Speakers />
      <Expect />
      <Attendee />
      <Agenda />
      <Tickets />
      <Faq />
      {/* <Sponsors /> */}
      <Bizzfooter />
    </div>
  );
}

export default Bizzneeti;
