import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import VideoPlayer from "./VideoPlayer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const videosData = [
    {
      id: "824804225",
      embedHtml: `<iframe src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=286686&amp;autoplay=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="KMS IG"></iframe>`,
    },
    {
      id: "824804225",
      embedHtml: `<iframe src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=286686&amp;autoplay=1" width="640" height="361" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="KMS IG"></iframe>`,
    },
    {
      id: "824804225",
      embedHtml: `<iframe src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=286686&amp;autoplay=1" width="640" height="362" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="KMS IG"></iframe>`,
    },
    {
      id: "824804225",
      embedHtml: `<iframe src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=286686&amp;autoplay=1" width="640" height="363" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="KMS IG"></iframe>`,
    },
    {
      id: "824804225",
      embedHtml: `<iframe src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=286686&amp;autoplay=1" width="640" height="364" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="KMS IG"></iframe>`,
    },
    {
      id: "824804225",
      embedHtml: `<iframe src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=286686&amp;autoplay=1" width="640" height="365" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="KMS IG"></iframe>`,
    },
    {
      id: "824804225",
      embedHtml: `<iframe src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=286686&amp;autoplay=1" width="640" height="366" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="KMS IG"></iframe>`,
    },
    {
      id: "824804225",
      embedHtml: `<iframe src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=286686&amp;autoplay=1" width="640" height="367" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="KMS IG"></iframe>`,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {videosData.map((_, index) => (
          <span
            key={index}
            onClick={() => handlePageChange(index)}
            style={{
              cursor: "pointer",
              margin: "0 5px",
              fontWeight: currentPage === index ? "bold" : "normal",
              fontSize: "24px", 
              color: currentPage === index ? "blue" : "black", 
            }}
          >
            &#x25CF;
          </span>
        ))}
      </div>
    );
  };

  const renderVideoSlides = () => {
    return videosData.map((video, index) => (
      <div
        key={index}
        onClick={openModal}
        style={{ cursor: "pointer", margin: "20px" }}
      >
        <img
          src={`https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d`}
          alt={`image_for_video_${index}`}
        />
      </div>
    ));
  };

  return (
    <div style={{ height: "420px", overflow: "hidden" }}>
      <Slider {...settings}>{renderVideoSlides()}</Slider>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div style={{ textAlign: "center" }}>
          <button style={{ marginBottom: "10px" }} onClick={closeModal}>
            Close Modal
          </button>
          {videosData[currentPage] && (
            <VideoPlayer embedHtml={videosData[currentPage].embedHtml} />
          )}
        </div>
        {renderPagination()}
      </Modal>
    </div>
  );
};

export default VideoSlider;
