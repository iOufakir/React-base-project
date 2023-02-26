import { TweetCardProps } from "types/Twitter";

const TweetCard = ({ id, text }: TweetCardProps) => (
  <div className="flex justify-center mb-10">
    <div className="block p-6 rounded-lg shadow-lg bg-white w-96">
      <div className="mb-2">
        <h5 className="text-gray-800 text-xl leading-tight font-light">
          Tweet
        </h5>

        <h6 className="text-stone-500">{id}</h6>
      </div>

      <div className="text-gray-700 text-base mb-4 h-32 overflow-y-scroll">
        <div className="accordion-body py-4 px-5 mb-4lo whitespace-pre-line">
          {text}
        </div>
      </div>

      <div className="flex justify-around">
        <button className="bg-red-600 w-32 text-white text-m p-1 px-2 rounded shadow-md hover:bg-red-500 hover:shadow-lg">
          Cancel
        </button>
        <button
          className="bg-green-600 w-32 text-white text-m p-1 px-2 rounded
           shadow-md hover:bg-green-500 hover:shadow-lg"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
);

export default TweetCard;
