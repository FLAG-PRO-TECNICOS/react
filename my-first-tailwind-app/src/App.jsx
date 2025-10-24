import "tailwindcss";
import MyModal from "./components/MyModal";

function App() {
  return (
    <>
      <h1 className="text-2xl text-center text-red-500 py-8 bg-pink-200 sm:bg-blue-500 lg:bg-yellow-200">
        Bom dia!
      </h1>
      <h2 className="text-xl text-center text-gray-600">
        We're almost to the weekend!
      </h2>

      <main className="flex flex-col gap-2 md:flex-row">
        <div className="bg-[#F00] w-100 min-h-50 shadow-2xl rounded-3xl"></div>
        <div className="bg-blue-100 w-100 min-h-50 shadow-2xl rounded-3xl"></div>
        <div className="bg-blue-100 w-100 min-h-50 shadow-2xl rounded-3xl"></div>
      </main>

      <MyModal
        id="m1"
        buttonTitle="Click me"
        modalTitle="🤣"
        modalText="HELLO HELLO HELLO"
      />

      <MyModal
        id="m2"
        buttonTitle="Click me too!"
        modalTitle="💩"
        modalText="LA AL LA LA LA AL AL ALA AL"
      />

      {/* // Exercicio
      // - Style H2
      // - Criem um cartao, com algum conteudo, cantos redondos, fundo colorido e sombra */}
    </>
  );
}

export default App;
