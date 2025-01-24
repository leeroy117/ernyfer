import { useStore } from "@nanostores/react";
import { isSelectedImage } from "../slideStore";
import { IMAGES } from '../data'



function ShowSelectedImage() {

    const $isCartOpen = useStore(isSelectedImage);

    return (
        <div className="w-full p-4">
            <img className="relative w-full drop-shadow-lg rounded-lg" src={IMAGES[$isCartOpen].url} alt="" />
        </div>
    )
}

export default ShowSelectedImage;