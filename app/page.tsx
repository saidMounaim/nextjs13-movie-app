import Link from "next/link";

async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`
  );
  return res.json();
}

export default async function Home() {
  const popularMovies = await getPopularMovies();

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-medium">Popular Movies</h1>
          <Link
            href="/movies/popular"
            className="py-2 px-5 bg-slate-800 text-md font-normal text-white"
          >
            See all
          </Link>
        </div>
      </div>
    </main>
  );
}
