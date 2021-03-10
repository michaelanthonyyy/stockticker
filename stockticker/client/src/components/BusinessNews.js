import React, { useEffect, useState } from "react";
import API from "../utils/API";

function BusinessNews() {
    const [loading, setLoading] = useState(true);
    const [carouselState, setCarouselState] = useState([]);
    const [activeSlide, setActiveSlide] = useState(["active","",""]);

    useEffect(() => {
        if (loading) {
            API.getBusinessNews()
            .then(response => {
                var randResultsList = [];
                var results = response.data.results;
                var tempState = [];

                for (var i=0; i<3; i++) {
                    var index = Math.floor(Math.random()*response.data.num_results);
                    while (randResultsList.includes(index) || !(results[index].section==="business")) {
                        index = Math.floor(Math.random()*response.data.num_results);
                    }
                    randResultsList.push(index);
                    // Populate Fields
                    tempState.push({
                            title: results[index].title,
                            titleLink: results[index].url,
                            image: results[index].multimedia[0].url,
                            abstract: results[index].abstract
                        });
                }

                setCarouselState(tempState);
                setLoading(false);
            });
        }
    });

    function handlePrev () {
        if (activeSlide[0] === "active") {
            setActiveSlide(["","","active"]);
        }
        else if (activeSlide[1] === "active") {
            setActiveSlide(["active","",""]);
        } else {
            setActiveSlide(["","active",""]);
        }
    }
    
    function handleNext () {
        if (activeSlide[0] === "active") {
            setActiveSlide(["","active",""]);
        }
        else if (activeSlide[1] === "active") {
            setActiveSlide(["","","active"]);
        } else {
            setActiveSlide(["active","",""]);
        }
    }

    return (
        <div className="container-fluid text-center">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner carousel-dark">
                    <div className={"carousel-item "+activeSlide[0]}>
                        <p className="h4">
                            <a className="carouselLink" id="articleTitle1" href={carouselState[0] ? carouselState[0].titleLink : ""}>
                                {carouselState[0] ? carouselState[0].title : ""}
                            </a>
                        </p>
                        <a id="previewLink1" href={carouselState[0] ? carouselState[0].image : ""}>
                            <img className="carouselImage" id="articlePreview1" alt="Preview1"
                            src={carouselState[0] ? carouselState[0].image : ""}  height="400" />
                        </a>
                        <div className="content" id="articleContent1">{carouselState[0] ? carouselState[0].abstract : ""}</div>
                    </div>
                    <div className={"carousel-item "+activeSlide[1]}>
                        <p className="h4">
                            <a id="articleTitle2" href={carouselState[1] ? carouselState[1].titleLink : ""}>
                                {carouselState[1] ? carouselState[1].title : ""}
                            </a>
                        </p>
                        <a id="previewLink2" href={carouselState[1] ? carouselState[1].image : ""}>
                            <img className="carouselImage" id="articlePreview2" alt="Preview2"
                            src={carouselState[1] ? carouselState[1].image : ""}  height="400" />
                        </a>
                        <div className="content" id="articleContent2">{carouselState[1] ? carouselState[1].abstract : ""}</div>
                    </div>
                    <div className={"carousel-item "+activeSlide[2]}>
                        <p className="h4">
                            <a id="articleTitle3" href={carouselState[2] ? carouselState[2].titleLink : ""}>
                                {carouselState[2] ? carouselState[2].title : ""}
                            </a>
                        </p>
                        <a id="previewLink3" href={carouselState[2] ? carouselState[2].image : ""}>
                            <img className="carouselImage" id="articlePreview3" alt="Preview3" 
                            src={carouselState[2] ? carouselState[2].image : ""}  height="400" />
                        </a>
                        <div className="content" id="articleContent3">{carouselState[2] ? carouselState[2].abstract : ""}</div>
                    </div>
                </div>
                <a className="carousel-control-prev" role="button" onClick={handlePrev}
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" role="button" onClick={handleNext}
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    )
}

export default BusinessNews;