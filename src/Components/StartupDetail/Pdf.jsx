import React, { useState, useEffect , useMemo, useCallback } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const PDFJS = window.pdfjsLib;

export default function Pdf(props) {
  const [pdf, setPdf] = useState(null);
  
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startupData] = useState(props.data || "");
  
  const [pdfRendering, setPdfRendering] = React.useState();


  
  

  const pdfUrl = useMemo(() => {
    return startupData ? `https://www.bizdateup.com/v1/pitch/${startupData}` :
      "https://doc-00-2c-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/9jn1e0jcb4vuhlg2rg91j1rkel93775u/ji18fp5b6e30vnnfsk3o0ig3ud513rgs/1687772025000/3/*/APznzaYskQJ9J8ji9DR0MrvlZ20VfsbGm11tVDiF47gM_STtsXCPAYgkLCEo1UlTDYCWJWOEajp9WIfSrrdAjPf5AtykZ8EVfiQ9SJUzWtsfdTJ7UhQWedkyXsHfCKEoebYlszlNawzXFVFKgPkSXiF49jO9hn5fkODqrYfGKf7_HiotyrOfDDHdFPFIOcM9GLbgzFTg-4JrkJloUwbQ4qBHKSk54uHl0q-_sgmgXeK_dAAwRCI0sZl4dP0YWFYi5zNrgOKC0ZwOb3iQJR3WYedk7v7Zo50BdfXdoidlLQo9wK29Jn3BK_uAeoixkn0MRxiHjStoZbhvgWsqZ9x5XsOCrOr34Kepad4KZ-aZXS8uC1rObmRqA6PZ44mxhsM4wyR4AalYyTm9?authuser&nonce=tei3u9f31qs2i&user=115687203258136979604&hash=hlrcetsfi1io1se8j4uuc52nosrd49ns";
    }, [startupData]);

  const showPdf = useCallback(async () => {
    try {
      const _PDF_DOC = await PDFJS.getDocument({
        url: pdfUrl,
      });
      setPdf(_PDF_DOC);
    } catch (error) {
      // Handle error
    }
  }, []);
  
  useEffect(() => {
    showPdf();
  }, [pdfUrl]);

const totalMainSlides = useMemo(() => (pdf && images.length > 0) ? Math.min(pdf.numPages, images.length) : 0, [pdf, images]);
const totalSmallSlides = useMemo(() => pdf ? Math.max(0, pdf.numPages - totalMainSlides) : 0, [pdf, totalMainSlides]);



  const renderPage = useCallback(async () => {
    if (!pdf)
    { 
      setPdfRendering(true)
      return;}
      setPdfRendering(false)

    const imagesList = [];
    const canvas = document.createElement("canvas");
   

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const render_context = {
        canvasContext: canvas.getContext("2d"),
        viewport: viewport,
      };

      await page.render(render_context).promise;
      const img = canvas.toDataURL("image/png");
      imagesList.push(img);
    }
    setImages(imagesList);
  }, [pdf]);

  

  useEffect(() => {
    renderPage();
  }, [renderPage, currentPage]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };


  
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
    },
    imageWrapper: {
      border: "1px solid rgba(0,0,0,0.15)",
      borderRadius: "3px",
      boxShadow: "0 2px 5px 0 rgba(0,0,0,0.25)",
      padding: "0",
    },
  };



  return (
    <>
      <section>
        <div className="relative w-[100%]  md:h-[700px] bg-[#ffffff] py-[25px] text-center ">
          <div className=" ">
            <div className="main"></div>

            <div className="md:w-[400px] my-[20px] mx-auto">
              <div id="pdf-loader" hidden={!pdfRendering}>
                Loading document ...
              </div>

              <div id="pdf-contents ">
                <div className="flex justify-around flex-row my-[20px]">
                  <div className="flex justify-center items-center w-[100%] relative">
                    <FaArrowAltCircleLeft
                      className=" absolute top-[150px] 2xl:left-[-355px] xl:left-[-300px] lg:left-[-250px] text-[30px] z-30 cursor-pointer text-[#000] select-none "
                      id="pdf-prev"
                      onClick={handlePrev}
                      style={{
                        display: currentPage === 1 ? "none" : "block",
                      }}
                    />
                    <FaArrowAltCircleRight
                      className="absolute top-[150px] 2xl:right-[-355px] xl:right-[-300px] lg:right-[-250px] text-[30px] z-30 cursor-pointer text-[#000] select-none"
                      id="pdf-next"
                      onClick={handleNext}
                      style={{
                        display:
                          currentPage < totalMainSlides - 1 ||
                          (totalSmallSlides === 0 &&
                            currentPage !== pdf?.numPages)
                            ? "block"
                            : "none",
                      }}
                    />

                    {/* slide 1 */}
                    <div className="md:block hidden p-[7px]">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          style={{
                            display:
                              index === currentPage - 2 ? "block" : "none",
                            width: "200px",
                            height: "auto",
                            margin: "0",
                            border: "1px solid black",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            opacity: "0.2",
                          }}
                        >
                          <img
                            src={image}
                            alt="PDF page"
                            style={{ height: "auto" }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* main screen slide 2*/}
                    <div className="p-[7px]">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className=" md:w-[600px]"
                          style={{
                            display:
                              index === currentPage - 1 ? "block" : "none",

                            height: "auto",
                            margin: "0",
                            border: "1px solid black",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            zIndex: "1",
                          }}
                        >
                          <img
                            src={image}
                            alt="PDF page"
                            style={{ height: "auto" }}
                          />
                        </div>
                      ))}
                    </div>
                    {/* slide 3 */}
                    <div className="md:block hidden p-[7px]">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          style={{
                            display:
                              index === currentPage + 0 ? "block" : "none",
                            width: "200px",
                            height: "auto",
                            margin: "0",
                            border: "1px solid black",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            opacity: "0.2",
                          }}
                          className=""
                        >
                          <img
                            src={image}
                            alt="PDF page"
                            style={{ height: "auto" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {`Total pages ` + pdf?.numPages}

                {/* <div id="page-loader" hidden={!pageRendering}>
              Loading page ... Page {currentPage} of{" "}
              <div id="pdf-total-pages">{pdf.numPages}</div>
            </div> */}
              </div>
            </div>
          </div>

          {/* small screen slide container */}
          <div className="flex items-center justify-center">
            {/* small screen slide 1 */}
            <div style={{ width: totalSmallSlides === 0 ? "100%" : "25%" }}>
              <div className="flex w-[100%] flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display: index === currentPage - 1 ? "block" : "none",
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px",
                    }}
                    className="cont_image"
                  >
                    <img
                      id="image-generated"
                      src={image}
                      alt={`PDF page ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: "0",
                        border: "1px solid black",
                      }}
                    />
                    {currentPage}
                  </div>
                ))}
              </div>
            </div>
            {/* small screen slide 2 */}
            <div style={{ width: totalSmallSlides === 0 ? "100%" : "25%" }}>
              <div className="flex w-[100%] flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display:
                        index === currentPage ||
                        (index === totalMainSlides - 1 && currentPage === 1)
                          ? "block"
                          : "none",
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px",
                    }}
                  >
                    {index === totalMainSlides - 1 &&
                    currentPage === 1 ? null : (
                      <>
                        <img
                          id="image-generated"
                          src={image}
                          alt={`PDF page ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            margin: "0",
                            border: "1px solid black",
                          }}
                        />
                        {currentPage + 1}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* small screen slide 3 */}

            <div style={{ width: totalSmallSlides === 0 ? "100%" : "25%" }}>
              <div className="flex w-[100%] flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display:
                        (index === currentPage + 1 &&
                          currentPage >= 1 &&
                          currentPage <= totalMainSlides - 2) ||
                        (index === totalMainSlides - 1 && currentPage === 0) ||
                        (index === totalMainSlides - 2 && currentPage === 0)
                          ? "block"
                          : "none",
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px",
                    }}
                  >
                    {index === totalMainSlides - 1 &&
                    currentPage === 0 ? null : (
                      <>
                        <img
                          id="image-generated"
                          src={image}
                          alt={`PDF page ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            margin: "0",
                            border: "1px solid black",
                          }}
                        />
                        {currentPage + 2}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* small screen slide 4 */}

            <div style={{ width: totalSmallSlides === 0 ? "100%" : "25%" }}>
              <div className="flex w-[100%] flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display:
                        index === currentPage + 2 &&
                        currentPage >= 1 &&
                        currentPage <= totalMainSlides - 2
                          ? "block"
                          : "none",
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px",
                    }}
                  >
                    {index === totalMainSlides - 1 &&
                    currentPage === 0 ? null : (
                      <>
                        <img
                          id="image-generated"
                          src={image}
                          alt={`PDF page ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            margin: "0",
                            border: "1px solid black",
                          }}
                        />
                        {currentPage + 3}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
