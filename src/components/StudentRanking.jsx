import {
  contestimage1,
  contestimage2,
  contestimage3,
  person1,
  person2,
  person3,
} from "../assets";

export default function StudentRanking() {
  const contents = [
    {
      id: 1,
      img: contestimage1,
      name: "Harkirat Bhaiya",
      Points: 100000,
      Attended: 200,
    },
    {
      id: 2,
      img: person1,
      name: "Siddhu",
      Points: 10,
      Attended: 200,
    },
    {
      id: 3,
      img: person2,
      name: "Dipen",
      Points: 10,
      Attended: 200,
    },
    {
      id: 4,
      img: person3,
      name: "Pawan",
      Points: 10,
      Attended: 200,
    },
    {
      id: 5,
      img: contestimage2,
      name: "Rohit Sharma",
      Points: 5000,
      Attended: 150,
    },
    {
      id: 6,
      img: contestimage3,
      name: "Ankit Verma",
      Points: 1200,
      Attended: 180,
    },
    {
      id: 7,
      img: contestimage1,
      name: "Meera Singh",
      Points: 800,
      Attended: 50,
    },
    {
      id: 8,
      img: contestimage2,
      name: "Manish Gupta",
      Points: 3000,
      Attended: 220,
    },
    {
      id: 9,
      img: contestimage3,
      name: "Vikram Singh",
      Points: 1500,
      Attended: 75,
    },
    {
      id: 10,
      img: contestimage1,
      name: "Suresh Mehta",
      Points: 700,
      Attended: 90,
    },
    {
      id: 10,
      img: person2,
      name: "Suresh Mehta",
      Points: 700,
      Attended: 90,
    },
    {
      id: 10,
      img: person1,
      name: "Suresh Mehta",
      Points: 700,
      Attended: 90,
    },
  ];

  return (
    <div className="w-[27%]">
      <div className="bg-[#1A1A1A]  p-7 cursor-pointer rounded-xl h-screen">
        <h2 className="bg-[#282828] text-white text-center w-48 p-1 rounded ">
          Top Students Ranking
        </h2>
        {contents.map((e) => (
          <div key={e.id} className="flex gap-8 mt-5">
            <div className=" overflow-hidden">
              <img className="w-10 h-10 rounded-full" src={e.img} alt="Image" />
            </div>
            <div className="text-white ">
              <h1 className="font-bold">{e.name}</h1>
              <div className="flex gap-2 text-[10px]">
                <p>Points {e.Points}</p>
                <p>Attended {e.Attended}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
