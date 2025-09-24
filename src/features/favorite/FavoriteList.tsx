import { HeartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import type { RootState } from "../../stores/store";

export default function FavoriteList() {
  const arrFavorite = useSelector((state: RootState) => state.favorite);
  console.log(arrFavorite);

  return (
    <div className="list-favorite">
      <h2>List favorites User</h2>

      <div className="list-data">
        {arrFavorite.map((el) => {
          return el.id === arrFavorite.length ? (
            <div className="item" key={el.id}>
              <span>{el.name}</span>
              <span>
                Favorites: <HeartOutlined className={el.love ? "love" : ""} />
              </span>
            </div>
          ) : (
            <div className="item border-btm" key={el.id}>
              <span>{el.name}</span>
              <span>
                Favorites: <HeartOutlined className={el.love ? "love" : ""} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
