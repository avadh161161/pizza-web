'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import ProductCard from '../../components/custom/product-card';
import products from '@/lib/product';



export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.price.toString().includes(searchQuery)
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Search Section */}
            <section className="bg-white py-6 md:py-8 shadow-sm">
                <div className="container px-4">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-base md:text-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container px-4">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-16 md:py-20">
                            <p className="text-xl md:text-2xl text-gray-500">No products found matching your search.</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
