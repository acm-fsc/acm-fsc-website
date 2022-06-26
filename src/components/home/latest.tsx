import { latests } from "@/data/latests";

interface LatestProps {
  title: string;
  data: typeof latests;
}

const Latest = ({ title, data }: LatestProps) => {
  const onHandleClick = (latestId: number) => {
    console.log(latestId);
  };

  return (
    <div className="my-4">
      <h2 className="text-center font-bold text-lg">{title}</h2>
      <div className="mx-5 my-2 grid grid-cols-1 gap-4">
        {data.map((latest) => (
          <div
            className="bg-gray-200 p-2 rounded drop-shadow-md shadow-md shadow-slate-700"
            key={latest.id}
          >
            <h3 className="font-bold text-center">{latest.title}</h3>
            <p>{latest.description}</p>
            <div className="flex justify-center">
              <button
                className="p-2 bg-slate-900 text-slate-100 rounded"
                onClick={() => onHandleClick(latest.id)}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
