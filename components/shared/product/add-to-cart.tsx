"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus, Minus, Loader } from "lucide-react";
import { Cart, CartItem } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { useTransition } from "react";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res?.success) {
        toast({
          variant: "destructive",
          description: res?.message,
        });
        return;
      }

      toast({
        description: res?.message,
        action: (
          <ToastAction
            className="bg-primary text-white hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            altText="Go To Cart"
            onClick={() => router.push("/cart")}
          >
            Go To Cart
          </ToastAction>
        ),
      });
    });
  };

  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      toast({
        variant: res.success ? "default" : "destructive",
        description: res.message,
      });

      return;
    });
  };

  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div className="flex items-center space-x-2">
      <Button
        type="button"
        variant="outline"
        className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        onClick={handleRemoveFromCart}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Minus className="w-4 h-4" />
        )}
      </Button>
      <span className="px-2 text-sm dark:text-white">{existItem.qty}</span>
      <Button
        type="button"
        variant="outline"
        className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        onClick={handleAddToCart}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Plus className="w-4 h-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button
      className="w-full bg-primary text-white hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      type="button"
      onClick={handleAddToCart}
    >
      {isPending ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <>
          <Plus className="w-4 h-4 mr-2" />
          Add To Cart
        </>
      )}
    </Button>
  );
};

export default AddToCart;
