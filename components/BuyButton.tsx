import Icon from "./Icon";
import { getProduct, formatPrice } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export default function BuyButton({ productId, label = "Buy on WhatsApp", className = "" }: {
  productId: string;
  label?: string;
  className?: string;
}) {
  const product = getProduct(productId);
  const message = product
    ? `Hi, I'd like to buy "${product.title}" (${formatPrice(product.price)}).`
    : "Hi, I'd like to buy these notes.";

  return (
    <div className={className}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full justify-center"
      >
        <Icon name="whatsapp" className="h-4 w-4" /> {label}
      </a>
    </div>
  );
}
