import { IProduct } from '../../../../domain/interface/products.inteface';
import { CardNewComponent } from './card.new.component';

export const CardComponent = ({ data, discountPercentage }: { data: IProduct[], discountPercentage: number }) => {
    return (
        // <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8 justify-center justify-items-center">
            {data.map((prod, index) => (

                <CardNewComponent data={prod} key={index} discountPercentage={discountPercentage}/>


                // <div key={index} className="group relative">
                //     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white p-2 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                //         <img src={prod.image}
                //             className="h-96 w-full object-contain object-center lg:h-full lg:w-full" />
                //     </div>
                //     <div className="mt-5 flex flex-col justify-between">
                //         <div className='flex justify-between'>
                //             <p className="mt-1 text-lg text-gray-400">{prod.title}</p>

                //             <p className="text-xl font-medium text-gray-500">
                //                 {discountPercentage > 0 ? (
                //                     <>
                //                         <del className='text-gray-400 mr-2'>{prod.price}</del>
                //                         ${(prod.price * (1 - discountPercentage / 100)).toFixed(2)}
                //                     </>
                //                 ) : (a
                //                     prod.price
                //                 )}
                //             </p>
                //         </div>
                //         <details className='select-none'>
                //             <summary>Detalle</summary>
                //             <p className="mt-1 text-sm text-gray-600">Description: {prod.description}</p>
                //         </details>
                //     </div>
                // </div>
            ))}












        </div>
    )
}

