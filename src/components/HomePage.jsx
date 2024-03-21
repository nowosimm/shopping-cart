import bakery from "../components/images/bakery.jpeg"

export default function HomePage() {
  return (
    <div className="flex flex-col  justify-center m-20">
      <div className="flex justify-center">
        <img className="max-w-96" src={bakery}></img>
      </div>
      <h1 className="text-3xl flex justify-center mb-3 font-cursive">Maddie St. Bakery</h1>
      <p className="text-base	flex justify-center font-cursive">Serving fresh baked goodies since 00'</p>
    </div>
  )
}
