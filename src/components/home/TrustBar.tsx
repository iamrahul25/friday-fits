import { Heart, Leaf, Sparkles, Star } from "lucide-react";

const VALUES = [
  {
    icon: Star,
    title: "Premium Quality",
    detail: "Styles made to last",
  },
  {
    icon: Sparkles,
    title: "Designed for You",
    detail: "Trendy & versatile",
  },
  {
    icon: Heart,
    title: "Loved by 50,000+",
    detail: "Happy customers",
  },
  {
    icon: Leaf,
    title: "Sustainable Choices",
    detail: "Fashion with a future",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-ff-border bg-ff-surface py-10 sm:py-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-10">
        {VALUES.map(({ icon: Icon, title, detail }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <span className="mb-3 flex size-11 items-center justify-center rounded-full bg-ff-card text-ff-olive">
              <Icon className="size-5" strokeWidth={1.5} />
            </span>
            <h3 className="text-[14px] font-semibold text-ff-text">{title}</h3>
            <p className="mt-1 text-[12px] text-ff-muted">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
