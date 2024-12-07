import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NewArrivals() {
  return (
    <section className="w-full max-w-[1170px] mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-[5px] h-[40px] bg-[#DB4444]" />
        <span className="text-[#DB4444] text-base font-semibold tracking-tight">Featured</span>
      </div>
      
      <h2 className="text-[36px] font-medium mb-10 tracking-tight">New Arrival</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[30px]">
        {/* PlayStation 5 Card */}
        <div className="lg:col-span-6 lg:row-span-2 relative rounded-[4px] overflow-hidden group bg-black">
          <Image
            src="/images/ps5.png"
            alt="PlayStation 5"
            width={570}
            height={600}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0">
            <h3 className="text-[24px] font-semibold text-white mb-3 tracking-tight">PlayStation 5</h3>
            <p className="text-white/90 text-sm mb-6 font-medium">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Button 
              variant="ghost" 
              className="h-8 px-0 text-white hover:text-white hover:bg-transparent p-0 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Women's Collections Card */}
        <div className="lg:col-span-6 relative rounded-[4px] overflow-hidden group bg-black">
          <Image
            src="/images/women.png"
            alt="Women's Collections"
            width={570}
            height={284}
            className="w-full h-[284px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0">
            <h3 className="text-[24px] font-semibold text-white mb-3 tracking-tight">Women&apos;s Collections</h3>
            <p className="text-white/90 text-sm mb-6 font-medium">
              Featured women collections that give you another vibe.
            </p>
            <Button 
              variant="ghost" 
              className="h-8 px-0 text-white hover:text-white hover:bg-transparent p-0 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Speakers Card */}
        <div className="lg:col-span-3 relative rounded-[4px] overflow-hidden group bg-black">
          <Image
            src="/images/speakers.png"
            alt="Speakers"
            width={270}
            height={284}
            className="w-full h-[284px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0">
            <h3 className="text-[24px] font-semibold text-white mb-3 tracking-tight">Speakers</h3>
            <p className="text-white/90 text-sm mb-6 font-medium">
              Amazon wireless speakers
            </p>
            <Button 
              variant="ghost" 
              className="h-8 px-0 text-white hover:text-white hover:bg-transparent p-0 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Perfume Card */}
        <div className="lg:col-span-3 relative rounded-[4px] overflow-hidden group bg-black">
          <Image
            src="/images/perfume.png"
            alt="Perfume"
            width={270}
            height={284}
            className="w-full h-[284px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0">
            <h3 className="text-[24px] font-semibold text-white mb-3 tracking-tight">Perfume</h3>
            <p className="text-white/90 text-sm mb-6 font-medium">
              GUCCI INTENSE OUD EDP
            </p>
            <Button 
              variant="ghost" 
              className="h-8 px-0 text-white hover:text-white hover:bg-transparent p-0 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

