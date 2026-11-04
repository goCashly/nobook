import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title mt-3">Page not found</h1>
      <Link href="/courses" className="btn-gold mt-8">
        Browse study notes
      </Link>
    </div>
  );
}
