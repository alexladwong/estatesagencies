"use client";
import { Button } from "@/components/ui/button";
import { HousePlus, LockKeyhole } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
    const path = usePathname();
    const router = useRouter();
    const { user, isSignedIn } = useUser();

    useEffect(() => {
        console.log(`Current path: ${path}`);
    }, [path]); 

    // Function to handle "Add New Ads" button click
    const handleAddNewAds = (e) => {
        if (!isSignedIn) {
            e.preventDefault(); // Prevent navigation
            router.push("/sign-in"); // Redirect to login page
        }
    };

    return (
        <div className="px-10 p-6 flex justify-between shadow-md fixed top-0 w-full z-10 bg-slate-50">
            <div className="flex gap-12 items-center">
                <Link href="/">
                    <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
                </Link>

                <ul className="hidden md:flex gap-10">
                    <li className={`font-semibold hover:text-primary hover:cursor-pointer ${path === "/" ? "text-primary" : ""}`}>
                        <Link href="/">For Sale</Link>
                    </li>
                    <li className={`font-semibold hover:text-primary hover:cursor-pointer ${path === "/forRent" ? "text-primary" : ""}`}>
                        <Link href="/forRent">For Rent</Link>
                    </li>
                    <li className={`font-semibold hover:text-primary hover:cursor-pointer ${path === "/agentLocator" ? "text-primary" : ""}`}>
                        <Link href="/agentLocator">Agents Locator</Link>
                    </li>
                </ul>
            </div>

            <div className="flex gap-4 items-center">
                {/* Conditionally redirect "Add New Ads" */}
                <Link href={isSignedIn ? "/add-new-listing" : "/sign-in"} onClick={handleAddNewAds}>
                    <Button className="flex gap-2">
                        <HousePlus className="h-5 w-5" />
                        Add New Ads
                    </Button>
                </Link>

                {/* If signed in, show UserButton; otherwise, show Sign In button */}
                {isSignedIn ? (
                    <UserButton />
                ) : (
                    <Link href="/sign-in">
                        <Button className="bg-blue-700 text-white border-purple-500 flex gap-2 items-center">
                            <LockKeyhole className="h-5 w-5" />
                            Sign In
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;
