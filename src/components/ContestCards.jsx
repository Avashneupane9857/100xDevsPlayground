/* eslint-disable react/prop-types */

export default function ContestCards({ title, timeLeft, img }) {
  return (
    <>
      <div className=" w-[40%] mt-[-200px] z-40 rounded-3xl overflow-hidden cursor-pointer">
        <div>
          <img src={img} alt="" className="w-[900px]" />
        </div>
        <div className="bg-[#1A1A1A] text-white p-4">
          <h1 className="font-bold">{title}</h1>
          <p className="font-extralight text-[10px]">{timeLeft}</p>
          <button></button>
        </div>
      </div>
    </>
  );
}
