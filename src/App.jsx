import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold">
          Dev Stack
        </h1>
      </main>

    </div>
  );
}

export default App;