
//icons
import { MessageSquareText, Circle, StarIcon  } from 'lucide-react';
//types
import type { Product } from '@/types'

const ProductDetails = ({ product } : { product: Product }) => {
    return (
        <>

            <div className="h-14 flex items-center gap-2 border rounded-lg p-4">
                <div className="flex items-center gap-1">
                    <MessageSquareText size={16} /> 
                    <span className="text-sm">{`دیدگاه (${product?.reviews?.length})`}</span>
                </div>

                <span className="mx-2">
                    <Circle size={9} fill="#333" className="text-2xl" />
                </span>

                <div className="flex items-center gap-1">
                    <StarIcon size={16} /> 
                    <span className="text-sm">{`امتیاز (${product?.rating})`}</span>
                </div>
            </div>
            
            <h1 className="text-2xl font-bold my-5"> {product.title} </h1>

            <div className="border rounded-2xl p-4">
                
                <h2 className="text-base font-bold mb-4">برخی از  ویژگی های محصول:</h2>
                
                <div className="bg-white rounded-2xl p-4 mb-5">
                <ul className="flex flex-col gap-4">
                    <li className="text-sm">وزن : 3.82 گرم</li>
                    <li className="text-sm">عیار طلا :  طلای 18 عیار</li>
                    <li className="text-sm">تعداد :  10</li>
                </ul>
                </div>
            </div>   
        </>
    );
}

export default ProductDetails;
