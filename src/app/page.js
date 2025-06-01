import HomeScreen from "./components/homecomponent";
import { fetchDepartmentAssets } from "@/actions";

export default async function Home(){

  const deptassets = await fetchDepartmentAssets();

  return(
    <div>
      <HomeScreen deptassets={deptassets}/>
    </div>
  );
}