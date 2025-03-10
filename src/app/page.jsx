import MianHero from "@/components/hero/MianHero";

export default function Home() {
  return (
    <main>
      <MianHero />
      {/* Project Section Card */}
      <section className="text-center m-8">
        <h1 className="mt-14 text-4xl font-extrabold text-gray-800 dark:text-white">
          🚀 Our Recent  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our latest work! We specialize in building innovative and scalable 
          solutions, from web apps to automation tools. 
        </p>
        <div className="mt-8">
          {/* <Projects/> */}
        </div>
      </section>
    </main>
  );
}
