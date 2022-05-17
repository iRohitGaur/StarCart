import React from "react";
import { IcOutlineFavoriteBorder } from "../../../assets/Icons";
import { useWishlist } from "../../../context";

function FavoriteButton() {
  const { wishlistProducts } = useWishlist();

  return (
    <button className="btn_icon_fa">
      <div className="sui_avatar">
        <IcOutlineFavoriteBorder />
        {wishlistProducts.length !== 0 && (
          <div className="bd_num bd_red">{wishlistProducts.length}</div>
        )}
      </div>
    </button>
  );
}

export default FavoriteButton;
