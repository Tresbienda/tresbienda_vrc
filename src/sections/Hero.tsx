export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Hafizd </h1>
      <p className="text-lg max-w-xl text-center">
        I’m a Mechanical Engineer specializing in FEA, energy conversion, and engineering design.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
        View My Work
      </button>
    </section>
  );
}