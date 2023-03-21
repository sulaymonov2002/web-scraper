import Link from "next/link";

type Props = {
  results: Product[];
};

function Results({ results }: Props) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-5 w-full">
      {results.map((result) => (
        <Link
          href={result.url}
          key={result.title}
          className="flex flex-col space-x-4 w-full bg-white rounded-lg shadow-md p-5"
        >
          <img
            srcSet={result.imageset}
            alt={result.title}
            className="object-contain w-full h-40 py-5"
              />
              
        </Link>
      ))}
    </div>
  );
}

export default Results;
