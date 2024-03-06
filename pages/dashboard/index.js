import AllProducts from "../../components/AllProducts";
import { fetchOrders, fetchProducts } from "../../lib/fetchData";

export default function Home({ products, orders }) {
  return (
    <div className="min-h-screen">
      <p className="text-black text-3xl mb-16 mt-8 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-2 gap-5 mb-16">
        <div className="stats shadow text-black bg-orange-400">
          <div className="stat ">
            <div className="stat-title text-black">Total Products </div>
            <div className="stat-value text-black">{products.length}</div>
            {/* <div className="stat-desc text-black">21% more than last month</div> */}
          </div>
        </div>

        <div className="stats shadow bg-orange-400">
          <div className="stat">
            <div className="stat-title text-black">Total Active Orders </div>
            <div className="stat-value text-black">{orders.length}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
          </div>
        </div>
      </div>

      <AllProducts products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const products = await fetchProducts();
  const orders = await fetchOrders();

  return {
    props: {
      products,
      orders,
    },
  };
}
