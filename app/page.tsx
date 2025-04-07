export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">Biblioteca Dois em Dois</h1>
      <p className="text-lg max-w-xl mb-6">
        E-books por apenas <strong>R$2</strong>. Parte da renda vai para causas sociais. Pouco por pouco, ajudamos muito. 📚❤️
      </p>
      <a href="#" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
        Ver E-books
      </a>
    </main>
  )
}