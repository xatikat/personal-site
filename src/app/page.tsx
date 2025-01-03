//import AlbumImage from "./AlbumImage";

import AlbumList from "@/app/AlbumList";

export default function Home() {

  return (
    <div className="bg-gradient-to-r from-background via-dark-accent to-background
    backdrop-brightness-[500%]
    grid grid-rows-[20px_1fr_20px] items-center justify-items-center
    min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <h1 className="text-2xl leading-tight">header text</h1>

        <main className="flex flex-col items-center justify-items-center gap-40">

            <AlbumList/>

        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <h1>footer text</h1>
        </footer>
    </div>
  );
}
