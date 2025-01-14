import Link from "next/link";

//TODO: FIX THE SCALE NOT CHANGING ON ACTIVE CLICK

export default function BackButton() {
  return (
    <Link
      className="transition-all duration-200 active:scale-[80%]"
      href={"/public"}
      draggable={false}
    >
      <div className="group/backbtn">
        <div className="absolute left-0 top-0 m-10 flex flex-row items-center justify-center gap-10 rounded-full bg-accent-2 p-10 transition-all duration-500 group-hover/backbtn:scale-110 group-hover/backbtn:brightness-150">
          <div className="absolute rounded-full bg-accent-1 p-8 transition-all duration-200 active:brightness-75">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
