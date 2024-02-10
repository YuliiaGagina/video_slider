import React, { useEffect } from "react";

const VideoPlayer = ({ embedHtml }) => {
  const VIMEO_ACCESS_TOKEN = "68e78a5cf48af57750a420d649c93a06";

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(`https://api.vimeo.com/videos/824804225`, {
          headers: {
            Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch video");
        }

        const videoData = await response.json();

        console.log(videoData);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideoUrl();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />;
};

export default VideoPlayer;
