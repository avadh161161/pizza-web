'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import products  from '@/lib/product';


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        product: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.contact.trim()) {
            newErrors.contact = 'Contact number is required';
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.contact)) {
            newErrors.contact = 'Please enter a valid contact number';
        }

        if (!formData.product) {
            newErrors.product = 'Please select a product';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setSubmitted(true);
            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    product: '',
                    message: '',
                });
                setSubmitted(false);
            }, 3000);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-800 py-12 md:py-16">
                <div className="container px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl text-orange-100">
                        Get in touch with us for any inquiries or business opportunities
                    </p>
                </div>
            </section>

            <div className="container px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Get In Touch</h2>
                            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                            We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you as soon as possible.
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">Phone</h3>
                                    <p className="text-sm md:text-base text-gray-600">+91 9800 098 998</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">Email</h3>
                                    <p className="text-sm md:text-base text-gray-600">info@pizzahub.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">Address</h3>
                                    <p className="text-sm md:text-base text-gray-600">
                                        123 Export Plaza, Trade District<br />
                                        Mumbai, India 400001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            {submitted ? (
                                <div className="text-center py-8 md:py-12">
                                    <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                        Thank You!
                                    </h3>
                                    <p className="text-lg md:text-xl text-gray-600">
                                        Your inquiry has been submitted successfully. We&apos;ll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <Label htmlFor="name" className="text-sm md:text-base font-semibold">
                                            Name <span className="text-red-500">*</span>
                                        </Label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                            className={`mt-2 w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500' : 'border-gray-200'
                                                }`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <Label htmlFor="email" className="text-base font-semibold">
                                            Email <span className="text-red-500">*</span>
                                        </Label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            className={`mt-2 w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : 'border-gray-200'
                                                }`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Contact Number Field */}
                                    <div>
                                        <Label htmlFor="contact" className="text-base font-semibold">
                                            Contact Number <span className="text-red-500">*</span>
                                        </Label>
                                        <input
                                            id="contact"
                                            type="tel"
                                            value={formData.contact}
                                            onChange={(e) => handleChange('contact', e.target.value)}
                                            className={`mt-2 w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.contact ? 'border-red-500' : 'border-gray-200'
                                                }`}
                                            placeholder="+91 98000 98998"
                                        />
                                        {errors.contact && (
                                            <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                                        )}
                                    </div>

                                    {/* Product Interested In */}
                                    <div>
                                        <Label htmlFor="product" className="text-base font-semibold">
                                            Product Interested In <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={formData.product}
                                            onValueChange={(value) => handleChange('product', value)}
                                        >
                                            <SelectTrigger
                                                className={`mt-2 w-full px-4 py-3 border-2 rounded-lg ${errors.product ? 'border-red-500' : 'border-gray-200'
                                                    }`}
                                            >
                                                <SelectValue placeholder="Select a product" />
                                            </SelectTrigger>
                                            <SelectContent>
                                               {products && products.length > 0 ? (
                                                   products.map((product) => (
                                                       <SelectItem key={product.id} value={product.id}>
                                                           {product.name}
                                                       </SelectItem>
                                                   ))
                                               ) : (
                                                   <SelectItem value="no-products" disabled>
                                                       No products available
                                                   </SelectItem>
                                               )}
                                            </SelectContent>
                                        </Select>
                                        {errors.product && (
                                            <p className="text-red-500 text-sm mt-1">{errors.product}</p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <Label htmlFor="message" className="text-base font-semibold">
                                            Message <span className="text-red-500">*</span>
                                        </Label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => handleChange('message', e.target.value)}
                                            rows={5}
                                            className={`mt-2 w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${errors.message ? 'border-red-500' : 'border-gray-200'
                                                }`}
                                            placeholder="Tell us about your requirements..."
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full py-5 md:py-6 text-base md:text-lg font-semibold bg-orange-600 hover:bg-orange-700"
                                    >
                                        Submit Inquiry
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
