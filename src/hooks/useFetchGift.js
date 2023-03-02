import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGift = (category) => {
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImg(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    img,
    isLoading,
  };
};
