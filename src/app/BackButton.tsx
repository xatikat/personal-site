import Link from "next/link";

//TODO: FIX THE SCALE NOT CHANGING ON ACTIVE CLICK

export default function BackButton() {
    return (
        <Link className="active:scale-[80%] duration-200 transition-all" href={'/'} draggable={false}>
            <div className="group/backbtn">
                <div
                    className="flex flex-row gap-10
                    items-center justify-center
                    top-0 left-0 m-10 p-10 absolute
                    rounded-full bg-accent-2
                    group-hover/backbtn:brightness-150
                    group-hover/backbtn:scale-110
                    duration-500 transition-all"
                >
                    <div className="absolute p-8
                    rounded-full bg-accent-1
                    active:brightness-75
                    duration-200 transition-all">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}