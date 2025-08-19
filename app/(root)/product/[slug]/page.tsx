import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/actions/product.actions";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";
import AddToCart from "@/components/shared/product/add-to-cart";
import { getMyCart } from "@/lib/actions/cart.actions";
import ReviewList from "./review-list";
import { auth } from "@/auth";
import Rating from "@/components/shared/product/rating";
import RelatedProducts from "@/components/RelatedProducts";
import ProductFeatures from "@/components/shared/product/product-features";

// --- Stock Badge Component ---
const StockBadge = ({ stock }: { stock: number }) => {
  if (stock <= 0) {
    return (
      <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300">
        ❌ Out of stock
      </span>
    );
  }

  const isLow = stock <= 5;
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
        isLow
          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
          : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      }`}
    >
      {isLow ? "⚠️ Low stock" : "✅ In stock"} — {stock} left
    </span>
  );
};

// --- Shipping Badge (Physical Products) ---
const ShippingBadge = () => (
  <div
    role="status"
    aria-label="Shipping information"
    className="inline-flex items-center space-x-4 rounded-full 
      bg-gradient-to-r from-green-100 to-green-50 
      px-5 py-2 shadow-sm transition-shadow hover:shadow-md
      dark:from-green-900 dark:to-green-800"
  >
    <Badge
      variant="outline"
      className="rounded-full border-green-300 bg-white px-3 py-1 text-green-700 font-medium
        dark:border-green-700 dark:bg-green-950 dark:text-green-300"
    >
      🚚 Shipping Info
    </Badge>
    <p className="m-0 text-sm text-gray-700 dark:text-gray-300">
      USA: <span className="font-semibold">20 days</span> · UK:{" "}
      <span className="font-semibold">10 days</span> · Others:{" "}
      <span className="font-semibold">7–15 days</span>
    </p>
  </div>
);

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = (
    await getRelatedProducts(product.category, product.id)
  ).map((relatedProduct) => ({
    ...relatedProduct,
    price: relatedProduct.price.toString(),
    image: relatedProduct.images[0],
  }));

  const session = await auth();
  const userId = session?.user?.id;
  const cart = await getMyCart();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Product Images */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>

          {/* Product Details */}
          <div className="col-span-2 p-5 sm:p-8">
            <div className="flex flex-col gap-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold text-gray-900 dark:text-gray-100">
                {product.name}
              </h1>

              {/* Shipping Info */}
              <ShippingBadge />

              <ProductFeatures title={product.name} />

              <Rating value={Number(product.rating)} />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.numReviews} reviews
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2
                    dark:bg-green-900 dark:text-green-300"
                />

                {/* Stock Indicator */}
                <StockBadge stock={product.stock} />
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Product Description
              </h2>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                {product.description.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Action Panel */}
          <div className="col-span-1 sticky top-24 self-start">
            <Card
              className="shadow-sm hover:shadow-md transition-shadow
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-700
                text-gray-700 dark:text-gray-300"
            >
              <CardContent className="p-4 space-y-4 text-sm">
                {/* Price */}
                <div className="flex justify-between items-center text-base">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Price
                  </span>
                  <ProductPrice value={Number(product.price)} />
                </div>

                {/* Stock */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-base text-gray-900 dark:text-gray-100">
                    Stock
                  </span>
                  <StockBadge stock={product.stock} />
                </div>

                {/* Delivery Info */}
                <section aria-labelledby="delivery-info-title">
                  <h3
                    id="delivery-info-title"
                    className="font-semibold text-base text-gray-900 dark:text-gray-100"
                  >
                    Shipping & Delivery
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    🚚 USA: <strong>20 days</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    🇬🇧 UK: <strong>10 days</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    🌍 Other countries: <strong>7–15 days</strong>
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Tracking information will be provided once shipped.
                  </p>
                </section>

                {/* Return Policy */}
                <section aria-labelledby="return-policy-title" className="mt-4">
                  <h3
                    id="return-policy-title"
                    className="font-semibold text-base text-gray-900 dark:text-gray-100"
                  >
                    Returns
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    🔁 30-day return policy. Items must be unworn, unused, and
                    returned in original packaging.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    See our full return policy{" "}
                    <a
                      href="https://www.navanri.com/return-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      here
                    </a>
                    .
                  </p>
                </section>

                {/* Confidence Badge */}
                <section
                  aria-labelledby="confidence-badge-title"
                  className="border-t pt-4 mt-4"
                >
                  <h3
                    id="confidence-badge-title"
                    className="font-semibold text-base text-gray-900 dark:text-gray-100"
                  >
                    Shop with Confidence
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    🛡️ <strong>Money Back Guarantee</strong>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Receive the product you ordered or your money back.{" "}
                    <a
                      href="https://www.navanri.com/refund-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      Learn more
                    </a>
                  </p>
                </section>

                {/* Add to Cart */}
                {product.stock > 0 ? (
                  <div className="pt-4">
                    <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                ) : (
                  <p className="pt-2 text-sm text-red-600 dark:text-red-400">
                    This product is currently out of stock.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-10">
        <h2 className="h2-bold mb-5 text-gray-900 dark:text-gray-100">
          Customer Reviews
        </h2>
        <ReviewList
          userId={userId || ""}
          productId={product.id}
          productSlug={product.slug}
        />
      </section>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </>
  );
};

export default ProductDetailsPage;
