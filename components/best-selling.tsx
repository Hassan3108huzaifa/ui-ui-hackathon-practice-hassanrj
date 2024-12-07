import Image from "next/image"
import { Heart, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"

const products = [
    {
        id: 1,
        name: "The north coat",
        image: "/images/products/coat.png",
        price: "250",
        originalPrice: "350",
        rating: 5,
        reviews: "65"
    },
    {
        id: 2,
        name: "Gucci duffle bag",
        image: "/images/products/bag.png",
        price: "960",
        originalPrice: "1160",
        rating: 4.5,
        reviews: "65"
    },
    {
        id: 3,
        name: "RGB liquid CPU Cooler",
        image: "/images/products/cooler.png",
        price: "160",
        originalPrice: "170",
        rating: 4.5,
        reviews: "65"
    },
    {
        id: 4,
        name: "Small BookShelf",
        image: "/images/products/bookshelf.png",
        price: "360",
        originalPrice: "360",
        rating: 5,
        reviews: "65"
    }
]

export default function BestSelling() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex flex-col gap-4 sm:gap-6">
                {/* Header Section */}
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-4 sm:w-5 h-8 sm:h-10 bg-[#DB4444] rounded-[4px]" />
                            <span className="text-[#DB4444] text-sm sm:text-base font-semibold">This Month</span>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-xl sm:text-2xl font-semibold">Best Selling Products</h2>
                            <Button
                                className="bg-[#DB4444] hover:bg-[#DB4444]/90 text-white h-10 sm:h-12 px-8 sm:px-12 rounded-[4px] text-sm sm:text-base font-medium"
                            >
                                View All
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[30px]">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white rounded-[4px]">
                            <div className="relative aspect-square bg-[#F5F5F5] rounded-[4px] p-3 sm:p-4">
                                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex flex-col gap-2">
                                    <Button variant="outline" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white">
                                        <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white">
                                        <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </Button>
                                </div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={190}
                                    height={180}
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pb-2 sm:pb-3">
                                    <Button className="bg-black text-white hover:bg-black/90 h-8 sm:h-10 rounded-[4px] text-sm sm:text-base font-medium px-3 sm:px-4">
                                        Add To Cart
                                    </Button>
                                </div>
                            </div>
                            <div className="p-2 sm:p-3">
                                <h3 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">{product.name}</h3>
                                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                                    <span className="text-[#DB4444] font-medium text-sm sm:text-base">${product.price}</span>
                                    {product.price !== product.originalPrice && (
                                        <span className="text-[#666666] line-through text-xs sm:text-sm">${product.originalPrice}</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-[#FFAD33]' : 'text-[#666666]'
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-xs sm:text-sm text-[#666666]">({product.reviews})</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <Button
                    variant="link"
                    className="sm:hidden text-[#DB4444] hover:text-[#DB4444]/90 font-medium self-end"
                >
                    View All
                </Button>
            </div>
        </section>
    )
}

