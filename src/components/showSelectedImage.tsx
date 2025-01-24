import { useStore } from "@nanostores/react";
import { isSelectedImage } from "../slideStore";
import { IMAGES } from '../data'



function ShowSelectedImage() {

    const $isCartOpen = useStore(isSelectedImage);

    return (
        <img className="w-full" src={IMAGES[$isCartOpen].url} alt="" />
    )
}

export default ShowSelectedImage;