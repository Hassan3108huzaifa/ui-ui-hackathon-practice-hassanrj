import Image from "next/image"
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { inter } from '@/app/ui/font'

const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        image: "/images/products/gamepad.png",
        price: "120",
        originalPrice: "160",
        discount: "40",
        rating: 5,
        reviews: "88"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        image: "/images/products/keyboard.png",
        price: "960",
        originalPrice: "1160",
        discount: "35",
        rating: 4,
        reviews: "75"
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        image: "/images/products/monitor.png",
        price: "370",
        originalPrice: "400",
        discount: "30",
        rating: 5,
        reviews: "99"
    },
    {
        id: 4,
        name: "S-Series Comfort Chair",
        image: "/images/products/chair.png",
        price: "375",
        originalPrice: "400",
        discount: "25",
        rating: 4.5,
        reviews: "99"
    },
    {
        id: 5,
        name: "Gucci duffle bag",
        image: "/images/products/bag.png",
        price: "960",
        originalPrice: "1160",
        discount: "65",
        rating: 4.5,
        reviews: "65"
    }
]

export default function FlashSales() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-8 sm:mt-14">
            <div className="flex flex-col gap-4 sm:gap-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <div className="flex gap-4 flex-col">
                        <div className="flex items-center gap-2">
                            <div className="w-4 sm:w-5 h-8 sm:h-10 bg-[#DB4444] rounded-[4px]" />
                            <span className="text-[#DB4444] text-sm sm:text-base font-semibold">Today&apos;s</span>
                        </div>

                        {/* Count down */}
                        <div className={`${inter.className} flex gap-4 sm:gap-10 font-extrabold flex-col sm:flex-row`}>
                            <h2 className="text-xl sm:text-2xl">Flash Sales</h2>
                            <div className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base">
                                <div className="text-center">
                                    <div className="font-bold">03</div>
                                    <div className="text-xs text-[#666666]">Days</div>
                                </div>
                                <div className="font-bold">:</div>
                                <div className="text-center">
                                    <div className="font-bold">23</div>
                                    <div className="text-xs text-[#666666]">Hours</div>
                                </div>
                                <div className="font-bold">:</div>
                                <div className="text-center">
                                    <div className="font-bold">19</div>
                                    <div className="text-xs text-[#666666]">Minutes</div>
                                </div>
                                <div className="font-bold">:</div>
                                <div className="text-center">
                                    <div className="font-bold">56</div>
                                    <div className="text-xs text-[#666666]">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 sm:gap-4">
                        <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-[#00000066]">
                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-[#00000066]">
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-[30px]">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white rounded-[4px]">
                            <div className="relative aspect-square bg-[#F5F5F5] rounded-[4px] p-3 sm:p-4">
                                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                                    <span className="bg-[#DB4444] text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-[4px]">
                                        -{product.discount}%
                                    </span>
                                </div>
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
                                    <span className="text-[#666666] line-through text-xs sm:text-sm">${product.originalPrice}</span>
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

                {/* View All Button */}
                <div className="flex justify-center mt-6 sm:mt-10">
                    <Button
                        className="bg-[#DB4444] hover:bg-[#DB4444]/90 text-white h-10 sm:h-12 px-8 sm:px-12 rounded-[4px] text-sm sm:text-base font-medium"
                    >
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    )
}

