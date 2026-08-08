import { Link } from "react-router-dom"

export const Home = () => {
  const handleSearchRoom = async () => { }

  return (
    <div className="bg-grid p-5 min-h-dvh flex flex-col justify-center items-center gap-8">
      <h1 className="text-center text-rat text-4xl font-bold">Bienvenido a Corte</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-center">Ingresa el código de la sala</h2>
        <form action={handleSearchRoom} className="flex sm:flex-row flex-col gap-2">
          <input className="p-2 px-4 bg-sky-100 outline-0 border-3 border-solid border-sky-200 rounded-lg" type="text" placeholder="ABC123" />
          <button className="py-2 px-4 font-semibold bg-rat text-white rounded-lg" onClick={(e) => { e.preventDefault() }}>Jugar</button>
        </form>
      </div>
      <div>
        <p>Para crear una sala primero</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
          <Link to={"/regsiter"} className="text-nose font-semibold underline-offset-5 hover:underline text-lg">Registrarte</Link>
          <Link to={"/login"} className="text-nose font-semibold underline-offset-5 hover:underline text-lg">Ingresar</Link>
        </div>
      </div>
    </div>
  )
}