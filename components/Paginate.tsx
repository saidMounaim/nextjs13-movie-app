import Link from "next/link";

interface IPaginate {
  currentPage: number;
  totalPages: number;
  pageType: string;
}

const Paginate = ({ currentPage, totalPages, pageType }: IPaginate) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6 mb-6">
      {currentPage > 1 && (
        <Link
          href={`/movies/${pageType}/?page=${Number(currentPage) - 1}`}
          className="bg-cyan-900 text-white font-bold py-2 px-4 rounded-r"
        >
          Prev
        </Link>
      )}
      {pageNumbers.map((number) => (
        <Link
          key={number}
          href={`/movies/${pageType}/?page=${number}`}
          className={`font-bold py-2 px-4 ${
            number === Number(currentPage)
              ? "text-white bg-cyan-900"
              : "text-cyan-900"
          }`}
        >
          {number}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`/movies/${pageType}/?page=${Number(currentPage) + 1}`}
          className="bg-cyan-900 text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Paginate;
