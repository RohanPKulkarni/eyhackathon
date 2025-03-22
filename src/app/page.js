import HomeScreen from "./components/homecomponent";
import { fetchProducts } from "@/actions";

export default async function Home(){

  const products = await fetchProducts();

  return(
    <div>
      <HomeScreen products={products}/>
    </div>
  );
}