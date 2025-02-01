import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Estate Agencies",
  description: "Welcome to the Best Real Estate Agency – Find Your Dream Home Today! Looking for the perfect home or investment property? Our top-rated real estate agency specializes in helping buyers, sellers, and investors navigate the market with ease. Whether you're searching for luxury homes, commercial properties, or affordable housing, we provide expert guidance and personalized service to meet your needs. 🏡 Buy, Sell, and Invest with Confidence! ✔ Expert real estate agents ✔ Exclusive property listings ✔ Seamless buying & selling process. Don’t miss out on the best real estate deals! Contact us today and make your property dreams a reality. 📞🔑 #RealEstate #DreamHome #BuySellInvest",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <body className={inter.className}>
          <Provider>
            <Toaster />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
