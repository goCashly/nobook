import Link from "next/link";
import Icon from "./Icon";
import { formatPrice, startingPrice, type Course } from "@/lib/products";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-400"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-gold-400 ring-4 ring-gold-400/30">
          <Icon name={course.icon} className="h-7 w-7" />
        </span>
        <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">{course.regulator}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{course.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{course.summary}</p>
      <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4">
        <span className="text-sm text-slate-500">
          From <strong className="text-lg text-navy-900">{formatPrice(startingPrice(course.slug))}</strong>
        </span>
        <span className="flex items-center gap-1 text-sm font-bold text-gold-600 transition group-hover:gap-2">
          View notes <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
