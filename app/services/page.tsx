import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
        />
        <div className="container relative z-20 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Our Services</h1>
            <p className="text-xl text-white/90 max-w-[700px]">
              Specialized agricultural engineering solutions for Prince Edward Island's farming community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Agricultural Engineering Services</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              We provide comprehensive engineering solutions for all major agricultural sectors in Prince Edward Island.
            </p>
          </div>

          {/* Dairy Farm Design */}
          <div
            id="dairy"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 border-t border-gray-200"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Dairy Farm Building Design</h3>
              <div className="space-y-4 text-gray-500">
                <p>
                  Our dairy farm building designs focus on creating optimal environments for both animals and operators,
                  with careful attention to traffic flow, ventilation, and labor efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Free-stall barn designs optimized for cow comfort and health</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Efficient milking parlor layouts that reduce labor requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Advanced ventilation systems for optimal temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Manure management systems that meet environmental regulations</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/dairy-farm.jpg" alt="Dairy Farm Building Design" fill className="object-cover" />
            </div>
          </div>

          {/* Beef Farm Design */}
          <div id="beef" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 border-t border-gray-200">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/beef-farm.jpg" alt="Beef Farm Building Design" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold">Beef Farm Building Design</h3>
              <div className="space-y-4 text-gray-500">
                <p>
                  Our beef farm building designs provide efficient, comfortable housing for cattle while maximizing
                  operational efficiency and minimizing labor requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Feedlot designs with optimal space allocation and feed access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Cow-calf operation facilities with specialized calving areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Handling facilities designed for animal welfare and worker safety</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Environmentally sound waste management systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Swine Farm Design */}
          <div
            id="swine"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 border-t border-gray-200"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Swine Farm Building Design</h3>
              <div className="space-y-4 text-gray-500">
                <p>
                  Our swine farm building designs incorporate the latest advancements in pig housing to optimize animal
                  welfare, production efficiency, and environmental control.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Farrowing facilities designed for sow and piglet comfort</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Nursery and finishing barns with precise environmental controls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Efficient feeding systems that reduce waste and labor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Ventilation systems designed for PEI's specific climate conditions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/swine-farm.jpg" alt="Swine Farm Building Design" fill className="object-cover" />
            </div>
          </div>

          {/* Poultry Farm Design */}
          <div
            id="poultry"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 border-t border-gray-200"
          >
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/poultry-farm.jpg" alt="Poultry Farm Building Design" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold">Poultry Farm Building Design</h3>
              <div className="space-y-4 text-gray-500">
                <p>
                  Our poultry farm building designs create optimal environments for bird health and productivity, with
                  advanced climate control and efficient operational layouts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Broiler houses with precise temperature and humidity control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Layer facilities designed for optimal egg production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Energy-efficient lighting and ventilation systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Biosecurity features to protect flock health</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Potato Storage Design */}
          <div
            id="potato"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 border-t border-gray-200"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Potato Storage Design</h3>
              <div className="space-y-4 text-gray-500">
                <p>
                  Our potato storage designs are tailored to PEI's potato industry, with advanced climate control
                  systems to maintain optimal storage conditions and preserve crop quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Temperature and humidity control systems for long-term storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Efficient ventilation designs to prevent condensation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Loading and unloading systems that minimize tuber damage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Energy-efficient designs to reduce operational costs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/potato-storage.jpg" alt="Potato Storage Design" fill className="object-cover" />
            </div>
          </div>

          {/* Agricultural Production Systems */}
          <div
            id="systems"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 border-t border-gray-200"
          >
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/production-systems.jpg"
                alt="Agricultural Production Systems"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold">Agricultural Production Systems</h3>
              <div className="space-y-4 text-gray-500">
                <p>
                  We design innovative agricultural production systems that improve efficiency, reduce labor
                  requirements, and enhance overall farm productivity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Automated feeding and watering systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Manure handling and waste management solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Environmental control systems for optimal production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Integration of new technologies into existing farm operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Discuss Your Project?</h2>
            <p className="text-white/90 md:text-xl/relaxed max-w-[700px]">
              Contact us today to schedule a consultation and discover how our agricultural engineering expertise can
              benefit your farm.
            </p>
            <a
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-green-700 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
