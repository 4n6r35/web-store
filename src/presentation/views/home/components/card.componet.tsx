import { IProduct } from '../../../../domain/interface/products.inteface';

export const CardComponent = ({ data }: { data: IProduct[] }) => {
    return (
        // <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="mt-5 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {data.map((prod, index) => (
                <div key={index} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white p-2 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img src={prod.image}
                            className="h-96 w-full object-contain object-center lg:h-full lg:w-full" />
                    </div>
                    <div className="mt-5 flex justify-between">
                        <div>
                            <p className="mt-1 text-lg text-gray-400">{prod.title}</p>
                            <p className="mt-1 text-sm text-gray-600">Description: {prod.description}</p>
                        </div>
                        <p className="text-xl font-medium text-gray-500">{prod.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

