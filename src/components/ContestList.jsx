import { contestimage1, contestimage2, contestimage3 } from "../assets";

export default function ContestList() {
  const contests = [
    {
      id: 1,
      title: "Probo Clone",
      timeLeft: "2 Days - 12 hr - 60 mins",
      img: contestimage1,
      type: "Expert",
    },
    {
      id: 2,
      title: "Quiz App",
      timeLeft: "1 Day - 5 hr - 30 mins",
      img: contestimage2,
      type: "Intermediate",
    },
    {
      id: 1,
      title: "WebRTC",
      timeLeft: "2 Days - 12 hr - 60 mins",
      img: contestimage1,
      type: "Expert",
    },
    {
      id: 1,
      title: "Messaging App",
      timeLeft: "2 Days - 12 hr - 60 mins",
      img: contestimage3,
      type: "Expert",
    },
  ];
  return (
    <div className="bg-[#1A1A1A] w-[60%] p-7 cursor-pointer rounded-xl h-screen">
      <h2 className="bg-[#282828] text-white text-center w-24 p-1 rounded ">
        On-Going
      </h2>
      {contests.map((e) => (
        <div key={e.id} className="flex justify-between mt-5">
          <div className=" overflow-hidden">
            <img
              className="w-[250px] h-36 rounded-xl"
              src={e.img}
              alt="Image"
            />
          </div>
          <div className="text-white mt-10">
            <h1>{e.title}</h1>
            <p>{e.timeLeft}</p>
          </div>
          <div>
            <h2 className="bg-[#282828]  mt-10 text-white text-center w-28 p-1 rounded ">
              {e.type}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
