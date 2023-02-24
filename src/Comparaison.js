import { useEffect, useState } from "react";
import image1 from "./images/icon-rock.svg";
import image2 from "./images/icon-paper.svg";
import image3 from "./images/icon-scissors.svg";

function Comparaison(props) {
  const [monImage, setMonimage] = useState(0);
  const [imageOrdi, setImageOrdi] = useState(0);
  const [timer, setTimer] = useState(3);
  const [bool, setBool] = useState(false);
  const [reaset, setReaset] = useState(true);
  const [style, setStyle] = useState("");
  const [styleordi, setStyleordi] = useState("");
  const [message, setMessage] = useState("draw")
  const [winner, setWinner] = useState(false)
  const [looser, setLooser] = useState(false)
  useEffect(() => {
    switch (props.select) {
      case 1:
        setMonimage(image1);
        setStyle("border-blue-400");
        break;
      case 2:
        setMonimage(image2);
        setStyle("border-yellow-400");
        break;
      case 3:
        setMonimage(image3);
        setStyle("border-red-400");
        break;
    }
  }, [props.select]);
  // timeout pour le compte a rebours
  useEffect(() => {
    let timeout = setTimeout(() => {
      setTimer(timer - 1);

      if (timer == 0) {
        setTimer(3);
      }
    }, 1000);
    if (timer == 0) {
      clearTimeout(timeout);
      choixOrdi();
    }
  }, [timer]);

  function choixOrdi() {
    let variable = Math.floor(Math.random() * 3);
    switch (variable) {
      case 0:
        setImageOrdi(image1);
        setStyleordi("border-blue-400");
        setBool(!bool);
        break;
      case 1:
        setImageOrdi(image2);
        setStyleordi("border-yellow-400");
        setBool(!bool);
        break;
      case 2:
        setImageOrdi(image3);
        setStyleordi("border-red-400");
        setBool(!bool);
        break;
    }
    if (props.select == 1 && variable == 1) {
      props.loos();
      setMessage("you lose")
      setLooser(true)
    } else if (props.select == 2 && variable == 2) {
      props.loos();
      setMessage("you lose")
      setLooser(true)
    } else if (props.select == 3 && variable == 0) {
      props.loos();
      setMessage("you lose")
      setLooser(true)
    } else if (props.select == 1 && variable == 2) {
      props.win();
      setMessage("you win")
      setWinner(true)
    } else if (props.select == 2 && variable == 0) {
      props.win();
      setMessage("you win")
      setWinner(true)
    } else if (props.select == 3 && variable == 1) {
      props.win();
      setMessage("you win")
      setWinner(true)
    } else {
      setMessage("draw")
    }
    setReaset(false);
  }
  return (
    <div className="flex w-[80%] justify-between">
      <div className="flex flex-col w-1/3 h-[500px] items-center justify-center gap-20">
            <h1 className="text-white text-3xl">You picked</h1>
        <div className={winner ? "border-[30px] border-gray-600 border-opacity-30   rounded-full" : " rounded-full border-transparent border-[30px]"}>
          <div className={winner ? "border-[30px] border-gray-600 border-opacity-40   rounded-full" : " rounded-full border-transparent border-[30px]"}>
            <div className={winner ? "border-[30px] border-gray-600 border-opacity-50   rounded-full" : " rounded-full border-transparent border-[30px]"}>
             <img
             className={
            "border-[20px] bg-white rounded-full h-48 w-48 p-8 " + style
            }
            src={monImage}
            alt=""
            />
            </div>
          </div>
        </div>
      </div>

      {reaset ? "" : 
      <div className="h-full flex flex-col gap-10 items-center justify-center">
        <h1 className="text-white text-7xl">{message}</h1>
        <button onClick={()=>{props.nouvelleMache()}} className="text-red-500 rounded-xl text-4xl w-[300px] bg-white  p-5">Play Again</button>
      </div>}


      <div className="flex flex-col w-1/3 h-[500px] items-center justify-center gap-20">
            <h1 className="text-white text-3xl">The house picked</h1>
        <div  className={looser ? "border-[30px] border-gray-600 border-opacity-30  rounded-full" : " rounded-full border-[30px] border-transparent"} >
          <div  className={looser ? "border-[30px] border-gray-600 border-opacity-40  rounded-full" : " rounded-full border-[30px] border-transparent"} >
            <div  className={looser ? "border-[30px] border-gray-600 border-opacity-50  rounded-full" : " rounded-full border-[30px] border-transparent"} >
        {bool ? (
          <img
            className={
              "border-[20px] bg-white rounded-full h-48 w-48 p-8 " + styleordi
            }
            src={imageOrdi}
            alt=""
          />
        ) : (
          <div className="h-48 w-48 p-8 flex justify-center items-center rounded-full opacity-20 bg-black ">
          <p className="text-9xl text-white ">{timer}</p>
          </div>
        )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comparaison;
