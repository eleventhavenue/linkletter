import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
        />
        <div className="container relative z-20 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">About Us</h1>
            <p className="text-xl text-white/90 max-w-[700px]">
              Decades of agricultural engineering excellence serving Prince Edward Island.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Our Company</h2>
              <div className="space-y-4 text-gray-500">
                <p>
                  Linkletter Engineering Inc. is a professional engineering company specializing in providing the
                  agricultural industry in Prince Edward Island with innovative solutions in farm building design and
                  agricultural production systems.
                </p>
                <p>
                  Since our founding in 1997, we have been dedicated to creating structurally sound, labor-efficient
                  designs that prioritize animal traffic and comfort for the unique needs of PEI's agricultural sector.
                </p>
                <p>
                  As a local PEI company, we take pride in our deep understanding of the regional agricultural landscape
                  and our commitment to supporting local farmers and agricultural businesses with expert engineering
                  solutions.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/company-building.jpg"
                alt="Linkletter Engineering office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/graeme-linkletter.jpg" alt="Graeme Linkletter" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Leadership</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Graeme Linkletter</h3>
                <p className="text-green-700 font-medium">President & CEO, M. Sc. Agr. Eng.</p>
                <div className="space-y-4 text-gray-500">
                  <p>
                    Graeme Linkletter brings exceptional expertise to agricultural engineering with his M. Sc. Agr. Eng.
                    from McGill University and over 37 years of experience with the Provincial Department of Agriculture
                    prior to founding Linkletter Engineering in 1997.
                  </p>
                  <p>
                    His extensive background combines academic knowledge with practical field experience, making him
                    uniquely qualified to understand and address the complex challenges faced by PEI's agricultural
                    sector.
                  </p>
                  <p>
                    Under Graeme's leadership, Linkletter Engineering has become synonymous with innovative, efficient,
                    and structurally sound agricultural building designs that prioritize both operational efficiency and
                    animal comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Approach</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              We combine engineering expertise with agricultural knowledge to deliver solutions that work for PEI
              farmers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Innovative Design</h3>
              <p className="text-gray-500">
                We create innovative solutions that address the unique challenges of agricultural operations in Prince
                Edward Island, incorporating the latest advancements in agricultural engineering.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Structural Integrity</h3>
              <p className="text-gray-500">
                All our designs prioritize structural soundness to ensure longevity and safety, accounting for PEI's
                specific climate conditions and agricultural requirements.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Operational Efficiency</h3>
              <p className="text-gray-500">
                We focus on creating labor-efficient designs that optimize workflow and animal traffic, helping farmers
                maximize productivity while minimizing labor costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter">Our Commitment to PEI Agriculture</h2>
            <p className="text-white/90 md:text-xl/relaxed">
              As a local PEI company, we are deeply committed to supporting the growth and sustainability of Prince
              Edward Island's agricultural industry through innovative engineering solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
