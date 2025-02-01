import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (

<section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside className="relative h-screen w-full lg:order-last lg:col-span-5 xl:col-span-6">
        <img
          alt="Background Image"
          src="/loginbg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </aside>
    

    <main
      className="block max-h-full items-center justify-center px-3  sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-4 md:px-8 lg:max-w-4xl text-center">
        

        <h1 className="mt-10 leading-relaxed font-bold text-blue-600 sm:text-3xl md:text-4xl">
          We Welcome You to our Real Estate Agencies
        </h1>

        <p className="mt-5 mb-2 leading-relaxed text-purple-600">
        Welcome to Our Top-Rated Real Estate Agency –  Whether you're buying, selling, or investing, our expert team is here to guide you every step of the way.
Don't just settle—choose excellence, trust, and unmatched service. Let’s turn your real estate dreams into reality today! 🚀✨
        </p>

        <SignUp />
      </div>

    </main>
  </div>
</section>
  )
  
  
  
  
}