import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProp {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProp) => {
  return (
    <div className="min-w-[266px] max-w-[266px] space-y-3">
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          fill
          alt={restaurant.name}
          className="rounded-lg object-cover"
        />

        <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary bg-white px-2 py-[2px]">
          <StarIcon className="fill-yellow-400 text-yellow-400" size={12} />

          <span className="text-sm font-semibold">5.0</span>
        </div>

        <Button
          size="icon"
          className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-600"
        >
          <HeartIcon size={16} className="fill-white" />
        </Button>
      </div>

      <div>
        <h3 className="text-sm font-semibold"> {restaurant.name}</h3>

        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={16} />

            <span className="text-sm text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entregha grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={16} />
            <span className="text-sm text-muted-foreground">
              {Number(restaurant.deliveryTimeMinutes)} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
