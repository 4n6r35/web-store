import { useState } from "react";
import { IProduct } from "../../../../domain/interface/products.inteface";
import { DetailModalComponent } from "./detail.modal.componet";
import { ShoppingCartSVG } from "../../../assets/icons/shoppingCart";

export const CardNewComponent = (props: { data: IProduct, discountPercentage: number }) => {


    const [showModal, setShowModal] = useState(false)
    // Calcular el precio con descuento si es necesario
    const discountedPrice = (props.data.price * (1 - props.discountPercentage / 100)).toFixed(2);

    const toggleModal = (): void => {
        setShowModal(prevState => !prevState);
    }

    return (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border  bg-white shadow-md select-none">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-contain w-full" src={props.data.image!} alt="product image" />
                {props.discountPercentage > 0 && (
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        {props.discountPercentage}% OFF
                    </span>
                )}
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{props.data.title}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p className="text-3xl font-bold text-slate-900">
                        {props.discountPercentage > 0 ? (
                            <>
                                <span>${discountedPrice}</span>
                                <span className="pl-2 text-sm text-slate-900 line-through">
                                    ${props.data.price.toFixed(2)}
                                </span>
                            </>
                        ) : (
                            <span>${props.data.price.toFixed(2)}</span>
                        )}
                    </p>
                </div>
                <a
                    onClick={toggleModal}
                    href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <ShoppingCartSVG />
                    Comprar
                </a>
            </div>
            {
                showModal && (
                    <DetailModalComponent data={props.data} currentState={showModal} discountPrice={Number(discountedPrice)} />
                )
            }
        </div>
    );
};
