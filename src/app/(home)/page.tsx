import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Package, Globe, TrendingUp, Shield, Box, Headphones } from 'lucide-react';

export default function Home() {
    return (
        <>
            <section className="bg-white">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:gap-10 py-12 md:py-24">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                Super Delicious Pizza in
                                <br />
                                <span className="text-primary">Only 45 Minutes!</span>
                            </h1>

                            <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                                Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
                            </p>

                            <div className="mt-8 flex justify-center md:justify-start">
                                <Button className="text-lg rounded-full py-4 px-6 md:py-5 md:px-8 font-bold">
                                    <Link href="/products" aria-label="Get your pizza now">
                                        Get your pizza now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="w-64 sm:w-80 md:w-[420px] lg:w-[520px]">
                                <Image
                                    alt="Delicious pizza on a plate"
                                    src="/pizza-main.png"
                                    width={520}        // intrinsic width (keeps aspect in next/image)
                                    height={520}       // intrinsic height
                                    className="w-full h-auto object-contain"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-6 md:py-12">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        Why Choose Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="p-6 md:p-8 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <Box className="w-7 h-7 md:w-8 md:h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get your pizza delivered in just 45 minutes! We ensure fast and reliable service.
                            </p>
                        </div>
                        <div className="p-6 md:p-8 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Fresh Ingredients</h3>
                            <p className="text-gray-600 leading-relaxed">
                               We use only high-quality, farm-fresh ingredients to ensure every slice tastes delicious.
                            </p>
                        </div>
                        <div className="p-6 md:p-8 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <Headphones className="w-7 h-7 md:w-8 md:h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">24/7 Customer Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                               Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-orange-600 to-orange-800 py-12 md:py-16">
                <div className="container text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Bulk Order Discounts
                    </h2>
                    <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8">
                        Get in touch with us discuss how we can help you with bulk orders.
                    </p>
                    <Link href="/contact">
                        <Button className="text-base md:text-lg rounded-lg py-5 md:py-6 px-6 md:px-8 font-semibold bg-white text-orange-600 hover:bg-gray-100">
                            Contact Us Now
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
