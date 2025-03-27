import React, { useEffect, useState } from "react";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  const [numbers, setNumbers] = useState([ONE, TWO, THREE, FOUR, FIVE, SIX]);
  const [open, setOpen] = useState(false);
  const [randomNum, setRandomNum] = useState(1);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const upgradeRandomNum = Math.floor(Math.random() * numbers.length);
    setRandomNum(upgradeRandomNum);
  }, [open]);

  const handleClickPicture = (index) => {
    if (randomNum) {
      if (randomNum === index + 1) {
        setOpen(false);
      } else {
        alert(`Sayımız ${index + 1} değil`);
      }
    }
  };

  return (
    <div className="flex justify-center bg-black min-h-screen">
      <Captcha
        numbers={numbers}
        handleClick={handleClick}
        open={open}
        handleClickPicture={handleClickPicture}
        randomNum={randomNum}
      />
    </div>
  );
}

const Captcha = ({
  numbers,
  handleClick,
  handleClickPicture,
  open,
  randomNum,
}) => {
  // KODUNUZ BURAYA GELECEK
  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      <h2 className="text-white font-bold text-lg">Modal</h2>
      <p className="text-white font-bold text-lg bg-red-500 p-2 rounded">
        İstenilen Sayı: {randomNum}
      </p>
      {open ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
          <div className="relative bg-white p-5 rounded-lg z-10">
            <div className="w-[450px] flex flex-wrap">
              {numbers.map((number, index) => {
                return (
                  <img
                    src={number}
                    alt=""
                    className="w-[150px] h-[150px]"
                    onClick={() => handleClickPicture(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
      <button
        className="bg-emerald-400 border border-emerald-200 rounded-md m-[10px] w-[100px] h-[80px] active:scale-95 active:bg-emerald-300 shadow-md"
        onClick={handleClick}
      >
        CAPTCHA
      </button>
    </div>
  );
};

export default App;
