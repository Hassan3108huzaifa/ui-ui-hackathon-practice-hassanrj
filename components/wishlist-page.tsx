"use client"

import Image from "next/image"
import { Eye, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { inter, poppins } from "@/app/ui/font"

const wishlistItems = [
    {
        id: 1,
        name: "Gucci duffle bag",
        image: "/images/products/bag.png",
        price: 960,
        originalPrice: 1160,
        discount: 35
    },
    {
        id: 2,
        name: "RGB liquid CPU Cooler",
        image: "/images/products/cooler.png",
        price: 1960,
        originalPrice: null,
        discount: null
    },
    {
        id: 3,
        name: "GP11 Shooter USB Gamepad",
        image: "/images/products/gamepad.png",
        price: 550,
        originalPrice: null,
        discount: null
    },
    {
        id: 4,
        name: "Quilted Satin Jacket",
        image: "/images/products/jacket.png",
        price: 750,
        originalPrice: null,
        discount: null
    }
]

const recommendedItems = [
    {
        id: 1,
        name: "ASUS FHD Gaming Laptop",
        image: "/images/products/laptop.png",
        price: 960,
        originalPrice: 1160,
        discount: 35,
        rating: 4.5,
        reviews: 65,
        isNew: false
    },
    {
        id: 2,
        name: "IPS LCD Gaming Monitor",
        image: "/images/products/monitor.png",
        price: 1160,
        originalPrice: null,
        discount: null,
        rating: 4.5,
        reviews: 65,
        isNew: false
    },
    {
        id: 3,
        name: "HAVIT HV-G92 Gamepad",
        image: "/images/products/gamepad.png",
        price: 560,
        originalPrice: null,
        discount: null,
        rating: 5,
        reviews: 65,
        isNew: true
    },
    {
        id: 4,
        name: "AK-900 Wired Keyboard",
        image: "/images/products/keyboard.png",
        price: 200,
        originalPrice: null,
        discount: null,
        rating: 4.5,
        reviews: 65,
        isNew: false
    }
]

export default function WishlistPage() {
    return (
        <div className={`${inter.className} min-h-screen bg-white`}>
            {/* Breadcrumb */}
           

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Wishlist Header */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className={`${poppins.className} text-2xl font-medium`}>
                        Wishlist ({wishlistItems.length})
                    </h1>
                    <Button 
                        variant="outline" 
                        className="h-12 px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors"
                    >
                        Move All To Bag
                    </Button>
                </div>

                {/* Wishlist Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="group">
                            <div className="relative aspect-square bg-[#F5F5F5] rounded-sm mb-4">
                                {item.discount && (
                                    <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded-sm">
                                        -{item.discount}%
                                    </span>
                                )}
                                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain p-4"
                                />
                                <div className="absolute inset-x-4 bottom-4">
                                    <Button className="w-full bg-black text-white hover:bg-black/90 h-10 rounded-sm">
                                        Add To Cart
                                    </Button>
                                </div>
                            </div>
                            <h3 className="font-medium mb-2">{item.name}</h3>
                            <div className="flex gap-3">
                                <span className="text-[#DB4444] font-medium">${item.price}</span>
                                {item.originalPrice && (
                                    <span className="text-[#666666] line-through">${item.originalPrice}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Just For You Section */}
                <div className="space-y-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
                            <h2 className={`${poppins.className} text-2xl font-medium`}>Just For You</h2>
                        </div>
                        <Button 
                            variant="outline" 
                            className="h-12 px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors"
                        >
                            See All
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {recommendedItems.map((item) => (
                            <div key={item.id} className="group">
                                <div className="relative aspect-square bg-[#F5F5F5] rounded-sm mb-4">
                                    {item.discount && (
                                        <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded-sm">
                                            -{item.discount}%
                                        </span>
                                    )}
                                    {item.isNew && (
                                        <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-xs px-3 py-1 rounded-sm">
                                            NEW
                                        </span>
                                    )}
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                    <div className="absolute inset-x-4 bottom-4">
                                        <Button className="w-full bg-black text-white hover:bg-black/90 h-10 rounded-sm">
                                            Add To Cart
                                        </Button>
                                    </div>
                                </div>
                                <h3 className="font-medium mb-2">{item.name}</h3>
                                <div className="flex gap-3 mb-2">
                                    <span className="text-[#DB4444] font-medium">${item.price}</span>
                                    {item.originalPrice && (
                                        <span className="text-[#666666] line-through">${item.originalPrice}</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < Math.floor(item.rating) ? 'text-[#FFAD33]' : 'text-[#666666]'
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-[#666666]">({item.reviews})</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

