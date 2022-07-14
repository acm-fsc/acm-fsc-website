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
      <h2 className="text-lg font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-4 mx-5 my-2">
        {data.map((latest) => (
          <div
            className="p-2 bg-gray-200 rounded shadow-md drop-shadow-md shadow-slate-700"
            key={latest.id}
          >
            <h3 className="font-bold text-center">{latest.title}</h3>
            <p>{latest.description}</p>
            <div className="flex justify-center">
              <button
                className="p-2 rounded bg-slate-900 text-slate-100"
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
