import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/custom/header';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
    title: 'Pizza World',
    description: 'Delicious pizzas for you.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen bg-background font-manrope antialiased',
                    manrope.variable
                )}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
