import CategoryList from "./components/category-list";
import Header from "./components/header";
import Search from "./components/search";
import ProductList from "./components/product-list";
import { Button } from "./components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./lib/prisma";
import PromoBanner from "./components/promo-banner";
import RestaurantList from "./components/restaurant-list";
import { Restaurant } from "@prisma/client";

export default async function Home() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner
          src="/Promo-Banner-01.png"
          alt="Até 30% de desconto em pizzas"
        />
      </div>

      <div className="pt-6">
        <div className="flex items-center justify-between px-5 pb-4">
          <h2 className="font-semibold">Pedidos Recomendados</h2>

          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>

        <ProductList products={products} />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner
          src="/Promo-Banner-02.png"
          alt="Até 30% de desconto em pizzas"
        />
      </div>

      <div className="mb-4 pt-6">
        <div className="flex items-center justify-between px-5 pb-4">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>

          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>

        <RestaurantList />
      </div>
    </>
  );
}
