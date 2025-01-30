"use client";
import { Button } from '@/components/ui/button';
import { HousePlus, KeySquare, LockKeyholeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';

function Header() {
    const path = usePathname();
    const {user, isSignedIn}= useUser();
    useEffect(() => {
        console.log(`Current path: ${path}`);
    }, [path]); 

    return (
        <div className="px-10 p-6 flex justify-between shadow-md fixed top-0 w-full z-10 bg-slate-50">
            <div className="flex gap-12 items-center">
                <Link href="/">
                    <Image src={'/logo.svg'} width={50} height={50} alt="logo" />
                </Link>

                <ul className="hidden md:flex gap-10">
                    <li className={`font-semibold hover:text-primary hover:cursor-pointer ${path === '/' ? 'text-primary' : ''}`}>
                        <Link href={'/'}>For Sale</Link>
                    </li>
                    <li className={`font-semibold hover:text-primary hover:cursor-pointer ${path === '/forRent' ? 'text-primary' : ''}`}>
                        <Link href={'/forRent'}>For Rent</Link>
                    </li>
                    <li className={`font-semibold hover:text-primary hover:cursor-pointer ${path === '/agentLocator' ? 'text-primary' : ''}`}>
                        <Link href={'/agentLocator'}>Agents Locator</Link>
                    </li>
                </ul>
            </div>

            <div className="flex gap-4 items-center">
                <Button className="flex gap-2">
                    <HousePlus className="h-5 w-5" />
                    Add New Ads
                </Button>

                {isSignedIn ? (
                <UserButton />
                ) : (
                <Link href="/sign-in">
                    <Button className="bg-blue-700 text-white border-purple-500 items-center" variant="outline">
                    <LockKeyholeIcon className="h-5 w-5" /> Sign In
                    </Button>
                </Link>
                )}

            </div>
        </div>
    );
}

export default Header;
