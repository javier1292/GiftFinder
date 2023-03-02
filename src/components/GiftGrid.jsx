import { useFetchGift } from "../hooks/useFetchGift";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({ category }) => {
  const { img, isLoading } = useFetchGift(category);
  return (
    <>
      <h1>{category}</h1>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {img.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
