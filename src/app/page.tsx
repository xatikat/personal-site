//import AlbumImage from "./AlbumImage";

import AlbumList from "@/components/AlbumList";

//<h1 className="text-2xl leading-tight">header text</h1>
//<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//      <h1>footer text</h1>
//</footer>

export default function Home() {
  return (
    <div>
      <div className="grid items-center justify-center overflow-visible font-[family-name:var(--font-geist-sans)]">
        <main>
          <AlbumList />
        </main>
      </div>
    </div>
  );
}
