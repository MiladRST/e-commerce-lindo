
//icons
import { MessageSquareText, Circle, StarIcon  } from 'lucide-react';
//types
import type { Product } from '@/types'
//shadcn
import { Badge } from '@/components/ui/badge';

const ProductDetails = ({ product } : { product: Product }) => {
    
    return (
        <div className="h-full flex flex-col">

            <div className="h-14 text-primary flex items-center gap-2 border rounded-lg p-4">
                <div className="flex items-center gap-1">
                    <MessageSquareText size={16} /> 
                    <span className="text-sm">
                        {`comments (${product?.reviews?.length})`}
                    </span>
                </div>

                <span className="mx-2">
                    <Circle size={9} fill="#333" className="text-2xl" />
                </span>

                <div className="flex items-center gap-1">
                    <StarIcon size={16} /> 
                    <span className="text-sm">
                        {`rating (${product?.rating})`}
                    </span>
                </div>
            </div>
            
            <h1 className="text-2xl font-bold my-5"> {product.title} </h1>

            <div className="flex flex-col flex-1 border rounded-2xl p-4">

                 <p className="leading-7 mb-5"> { product.description || 'No description available!' }</p>
                
                <h2 className="text-base font-bold mb-2">
                    Product Specifications:
                </h2>
                
                <div className="bg-white flex flex-col gap-2 rounded-2xl px-4 py-2 mb-5">
                    
                    {
                        product?.dimensions && (
                            <>
                                { 
                                Object.entries(product.dimensions).map(([key,value]) =>(
                                    <span key={key} className="text-sm">
                                        {key} : {value}
                                    </span>))
                                }
                            </>
                        )
                    }

                    {
                        product?.weight && (
                            <span className="text-sm">
                                Weight: {product.weight}
                            </span>
                        )
                    }

                    {
                        product?.minimumOrderQuantity && (
                            <span className={`text-sm ${ product.minimumOrderQuantity > 5 ? 'text-green-600' : 'text-red-600'}`}>
                                Available : {product.minimumOrderQuantity}
                            </span>
                        )   
                    }
                    
                </div>

                {/* tags */}
                { product?.tags && product.tags.length > 0  && (
                    <div className="flex items-center gap-2 flex-wrap">
                        { product.tags.map(tag => <Badge key={tag}>#{tag}</Badge>)}
                    </div>
                )}

            </div>   
        </div>
    );
}

export default ProductDetails;
