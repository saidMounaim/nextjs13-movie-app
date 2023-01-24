import PopularMovies from "@/components/PopularMovies";

async function getMovies(type: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return res.json();
}

export default async function Home() {
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  const upcomingMovies = await getMovies("upcoming");

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <PopularMovies popularMovies={popularMovies} />
      </div>
    </main>
  );
}
