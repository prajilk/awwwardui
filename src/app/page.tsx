import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-7 py-20">
      <Link
        href={"/buttons"}
        className="relative overflow-hidden rounded-full bg-black px-6 py-3 uppercase after:absolute after:inset-0 after:h-[500%] after:w-32 after:-translate-x-[150%] after:-translate-y-20 after:rotate-45 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:transition-transform after:duration-500 hover:after:translate-x-[200%]"
      >
        <span className="z-10">Browse components</span>
      </Link>
    </div>
  );
}
