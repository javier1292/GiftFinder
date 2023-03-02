export const getGifs = async (category) => {
    const api_key = "CI0Ka0KuN3TwIuu4Lawr45dIDRHSJRLn";
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}`;
    const resp = await fetch(url);
  
    const { data } = await resp.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      url: img.images.downsized_medium.url,
      title: img.title,
    }));
    return gifs;
  };
  