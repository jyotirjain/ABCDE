import React from "react";
import inves2 from "../../Images/Layout2/inves2.png";
// import internationalpayment from "../../Images/Layout2/internationalpayment.png";
// import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ResionToinvest.css";

const data = [
  {
    img: inves2,
    title: "Startups revolutionizing the word ",
    text: "The word of startups is booming. from real estate to healthcare, they’re taking over the word. out of even 10 companies 2 of them are startups and this statistics are growing on very rapid scale. invest in these growing startups and be a part of this revolution.",
  },
  {
    img: inves2,
    title: "Early Investment Means Greater Rewards",
    text: "On an average a successful startup gives 30-40% return on investment with bare minimum involvement. But those are average results. Exceptional startups can give upto 50x returns in a year or even more. Such asymmetric returns makes startup investment an excellent option to generate passive income.",
  },
  {
    img: inves2,
    title: "Impact Investment",
    text: "When you invest in startups, you not only help in job creation but also in powering innovations. In fact, startup businesses created over 3 million jobs in 2020 alone. For investors looking to directly impact and support job creations in their community, investing in startups is a great path.",
  },
  {
    img: inves2,
    title: "Be a part of the top 1% club.",
    text: "Angel investing — hunting for a unicorn — portfolio diversification was previously available to only the wealthiest 1% of the Indian population. With Bizdateup, you can invest in private startups and own a piece of them and earn huge returns which can outperform your entire investment portfolio.",
  },
];

const ResionToinvest = () => {
  //   const [progress,setProgress]= useState(0)
  //   const [slideToShow,setSlideToShow]= useState(3)

  //   const setSlides =()=>{
  //     if(window.innerWidth <= 1280 && window.innerWidth > 1000){
  //       setSlideToShow(3)
  //     }else if(window.innerWidth <= 1000 && window.innerWidth > 650){
  //       setSlideToShow(2)
  //     }else if(window.innerWidth<= 650){
  //       setSlideToShow(1)
  //     }
  //   }

  // useEffect(()=>{
  //   setSlides()
  //   setProgress(100 / (data.length - slideToShow + 1))
  //   window.addEventListener("resize", ()=>{setSlides()})
  // })

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   afterChange: current =>{
  //     setProgress(100 / (data.length - slideToShow + 1) * (current + 1))
  //     //
  //   }
  // }

  return (
    <>
      <section>
        <div className="bg-[#ffffff] w-[100%] relative md:px-0 px-[16px] font-[Inter] ">
          <div className="md:text-center text-[#230152] md:pt-[106px] pt-[50px] md:pb-[50px] pb-[30px] ">
            <h4 className="md:text-[30px] text-[28px] font-[400] pb-[20px] tracking-[0.2px] leading-[24px]">
              Some amazing facts about Startups{" "}
            </h4>
            <h4 className="leading-[24px] text-[15px] font-[400] text-[#230152] font-[Inter] tracking-[0.2px]">
              why use Bizdateup’s platform ?
            </h4>
          </div>

          <div className=" md:w-[80%] md:px-0 px-[20px] md:pb-[100px] pb-[80px] mx-auto">
            <Slider {...settings}>
              {data.map((el, index) => (
                <div
                  className="md:h-[350px] mb-[20px] cursor-pointer w-[100%] mx-auto flex justify-center items-center"
                  key={index}
                >
                  <div className="md:w-[539px] md:h-[295px] h-[420px] w-[100%] mx-auto  md:mx-[36.95px]  tracking-[0.4px] leading-[24px] md:mb-0 rounded-[20px] px-[19px] z-30 bg-[#F6F6FE] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
                    <div className="w-[46px] pt-[24px]">
                      <img src={el.img} alt="" />
                    </div>
                    <h4 className="text-[#180048] font-[400] font-[Inter] pb-[20px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[35px] ">
                      {el.title}
                    </h4>
                    <p className="md:text-[16px] text-[15px] font-[400] font-[Inter] tracking-[0.22px] text-[#180048] leading-[25px]  ">
                      {el.text}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
            {/* <div className="h-[2px] bg-gray-300 w-[250px] absolute bottom-0 right-[45%]">
              <div className="bg-[#fab1a0] absolute h-[100%] transition-all" style={{
                width:`${progress}%`}}></div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResionToinvest;
