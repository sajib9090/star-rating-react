import { useEffect, useState } from "react";
import "./App.css";
import StarRating from "./StarRating";

// function App() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch(`https://dummyjson.com/products`)
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-6xl text-center font-thin my-12">Products</h1>
//       <div className="grid grid-cols-3 gap-6">
//         {products?.map((p) => (
//           <div key={p.id} className="w-[400px] border border-black p-4">
//             <img className="h-[250px] w-full" src={p.thumbnail} alt="" />
//             <p>Name: {p.title}</p>
//             <p>
//               Previous Price: $
//               <del className="text-red-700">{p.price + 200}</del>
//             </p>
//             <p>
//               Discount Price:{" "}
//               <span className="font-bold text-green-600">${p.price}</span>
//             </p>
//             <p>Description: {p.description}</p>

//             <div className="flex items-center">
//               <StarRating value={p.rating} size="25" />
//               <p className="ml-2">({p.rating})</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

const App = () => {
  const [rating, setRating] = useState();
  const [starHeight, setStarHeight] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.inp.value;
    const starSize = form.starSize.value;
    setRating(value);
    setStarHeight(starSize);
  };
  // alert(typeof starHeight);
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl mb-2">Star Rating</h1>
      <form onSubmit={handleSubmit} className="space-y-1">
        <input
          className="px-2 py-1 border-2 border-blue-500"
          type="text"
          name="inp"
          id=""
          placeholder="Enter Value"
          required
        />
        <br />
        <input
          className="px-2 py-1 border-2 border-blue-500"
          type="number"
          name="starSize"
          id=""
          placeholder="Enter size value (px)"
          required
        />
        <br />
        <input
          className="px-3 cursor-pointer py-1 bg-green-700 text-white"
          type="submit"
          value="Render"
        />
      </form>
      <div>
        <h2 className="text-xl text-center my-2">Result</h2>
        <StarRating value={rating} size={starHeight} />
      </div>
    </div>
  );
};

export default App;
