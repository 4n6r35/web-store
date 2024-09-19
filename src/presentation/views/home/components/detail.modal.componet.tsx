import { useState } from 'react';
import { IProduct } from '../../../../domain/interface/products.inteface';
import { CrossIcon } from '../../../assets';

export const DetailModalComponent = ({ data, currentState, discountPrice }: { data: IProduct, currentState: boolean, discountPrice: number }) => {

    const [modalCurrentState, setModalCurrentState] = useState(currentState)

    const closeModal = () => {
        setModalCurrentState(false)
    }


    const truncateText = (text: string, limit: number) => {
        return text.length > limit ? `${text.substring(0, limit)}...` : text;
      };
    
    return (
        <>
            {modalCurrentState !== false && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    // Cerrar modal al hacer clic fuera del contenido
                    onClick={closeModal}
                >
                    <div
                        className="max-w-md mx-4 h-80 px-3 bg-white rounded-lg shadow-lg"
                        // Evitar que el clic cierre el modal cuando se hace clic dentro del contenido
                        onClick={(e) => e.stopPropagation()}>
                        <div className='flex justify-between text-black'>
                            <p
                                className="text-sm font-bold py-2"
                                onClick={closeModal}>
                                {data.title}
                            </p>

                            <div
                                className="text-end font-bold text-xl"
                                onClick={closeModal}> <CrossIcon /> </div>
                        </div>

                        <div className='flex  text-black'>
                            <img className="mt-3 relative w-48 h-52 object-contain rounded-md border shadow-md" src={data.image!} alt="product image" />
                            <div className='px-5 py-3'>
                                <p className="text-xl font-semibold">{
                                discountPrice > 0 ? (
                                    <span className='text-lg font-bold'>Precio: ${discountPrice.toFixed(2)} </span>
                                ):(
                                    <span className='text-lg font-bold'>Precio: ${data.price} </span>
                                )}
                                </p>
                                <p className="py-2 text-sm"><span className='text-lg font-bold'>Descipción:</span> {truncateText(data.description, 99)}</p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>

    );
};
