import CartLength from "@/components/CartLength";
import ProductList from "@/components/ProductList";
import { getData } from "@/lib/getData";
import Link from "next/link";
const HomePage = async () => {
  const products = (await getData("https://fakestoreapi.com/products")) ?? [];
  return (
    <div className="bg-gray-600 mx-auto my-3 max-w-7xl px-2 py-8 rounded-md sm:px-6 lg:px-8">
      <div className="border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
        <div className="bg-amber-50 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
          <h2 className="text-2xl  py-2 px-3 rounded-lg uppercase text-[#9ec113] font-semibold">
            Products
          </h2>
          <Link
            className="bg-gradient-to-r from-[#A4BC46] to-[#85A019] py-2 px-3 rounded-lg uppercase text-white font-semibold"
            href="/cart">
            View Cart (<CartLength />)
          </Link>
        </div>
        <div className="bg-white dark:bg-slate-700 px-4 py-6">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
