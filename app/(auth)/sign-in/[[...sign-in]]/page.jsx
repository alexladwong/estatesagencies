import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (

<section className="bg-black">
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
        <a className="block text-blue-600" href="#">
          <span className="sr-only">Home</span>
          {/* <img src="/logo.png" className='w-20' alt="Logo" /> */}
        </a>

        <h1 className="mt-10 leading-relaxed font-bold text-white sm:text-3xl md:text-4xl">
          Welcome Back to Real Estate Agencies
        </h1>

        <p className="mt-10 leading-relaxed text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
          quibusdam aperiam voluptatum.
        </p>

        <SignIn />
      </div>

    </main>
  </div>
</section>
)


}