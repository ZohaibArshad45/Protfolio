// components/Navbar.jsx
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [activeLink, setActiveLink] = useState('/');

    // To avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Set initial active link based on current path
        if (typeof window !== 'undefined') {
            const path = window.location.pathname;
            setActiveLink(path === '' ? '/' : path);
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        // { name: 'Projects', href: '/' },
        // { name: 'Blog', href: '/' },
        // { name: 'Contact', href: '/' },
    ];

    return (
        <header 
            className={`sticky top-0 z-999 px-2 sm:px-6 w-full transition-all shadow-md duration-300 ${
                scrolled ? 
                'bg-background/75 dark:bg-background/85 shadow-md backdrop-blur-lg' : 
                'bg-background/40 dark:bg-background/30 backdrop-blur-md'
            }`}
        >
            <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo - Now isolated on the left */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg shadow-sm group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                        <Code className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Coding Skill-UP</span>
                </Link>

                {/* Navigation and Theme Toggle - Now grouped on the right */}
                <div className="flex items-center gap-6">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveLink(item.href)}
                                className="relative group"
                            >
                                <span className={`text-sm font-medium transition-colors ${
                                    activeLink === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                                }`}>
                                    {item.name}
                                </span>
                                <span 
                                    className={`
                                        absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 
                                        ${activeLink === item.href ? 'w-full' : 'w-0 group-hover:w-full'}
                                    `}>
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Theme toggle */}
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="rounded-full w-10 h-10 bg-background/50 hover:bg-primary/10 dark:hover:bg-primary/20"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>
                    )}

                    {/* Mobile menu */}
                    <Sheet >
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden rounded-full w-10 h-10 bg-background/50 hover:bg-primary/10 dark:hover:bg-primary/20"
                                aria-label="Open menu"
                            >
                                <Menu className="h-10 w-10" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="backdrop-blur-lg bg-background/90 flex flex-col m-5 pl-7">
                            <div className="flex flex-col  mt-12">
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                                        <Code className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="font-bold text-xl">Coding Skill-UP</span>
                                </div>
                                
                                <div className="flex flex-col space-y-5 justify-center items-center">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setActiveLink(item.href)}
                                            className="relative group overflow-hidden py-1"
                                        >
                                            <span className={`text-lg font-medium transition-colors ${
                                                activeLink === item.href ? 'text-primary' : 'hover:text-primary'
                                            }`}>
                                                {item.name}
                                            </span>
                                            <span 
                                                className={`
                                                    absolute -bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 
                                                    ${activeLink === item.href ? 'w-full' : 'w-0 group-hover:w-full'}
                                                `}>
                                            </span>
                                        </Link>
                                    ))}
                                {mounted && (
                                    <div className="flex items-center mt-6 border-t pt-6">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                            className="rounded-full"
                                        >
                                            {theme === 'dark' ? (
                                                <Sun className="h-4 w-4 mr-2" />
                                            ) : (
                                                <Moon className="h-4 w-4 mr-2" />
                                            )}
                                            {theme === 'dark' ? 'Light' : 'Dark'} Mode
                                        </Button>
                                    </div>
                                )}
                                </div>
                                
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;