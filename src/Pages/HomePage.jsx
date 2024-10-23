import ContestCards from "../components/ContestCards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { contestimage1, contestimage2, contestimage3 } from "../assets";

function HomePage() {
  const contests = [
    {
      id: 1,
      title: "Probo Clone",
      timeLeft: "2 Days - 12 hr - 60 mins",
      img: contestimage1,
    },
    {
      id: 2,
      title: "Quiz App",
      timeLeft: "1 Day - 5 hr - 30 mins",
      img: contestimage2,
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="w-[80%] mx-auto flex justify-around">
        {contests.map((contest) => (
          <ContestCards
            key={contest.id}
            title={contest.title}
            timeLeft={contest.timeLeft}
            img={contest.img}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
