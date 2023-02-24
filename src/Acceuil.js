import { useEffect, useState } from "react";
import Game from "./Game"
import modal from "./images/image-rules.svg"
import close from "./images/icon-close.svg"
import Comparaison from "./Comparaison";
function Acceuil() {
    const [score, setScore] = useState(0)
    const [etap, setEtape] = useState(0)
    const [monchoix,setMonchoix] = useState();
    const [raigle, setRaigle] = useState(false);

    function rejouer() {
        setEtape(0)
    }
    
    function incremonterScore() {
        setScore(score + 1)
    }
    function incrmonterEtape() {
        setEtape(etap + 1)
    }
    function decremonterScore() {
        setScore(score - 1)
    }
    function choix(params) {
        setMonchoix(params);
    }

     return(
        <div className={"bg-[rgba(24,37,71,255)] h-[100%] w-[100%] flex flex-col items-center "}>
            <div className="border-4 border-white h-40 w-[50%] flex justify-between items-center mt-20 rounded-2xl ">
                <div className="choix text-white ml-4 ">
                    <h1 className="text-4xl font-bold ">Rock</h1>
                    <h1 className="text-4xl font-bold ">Paper</h1>
                    <h1 className="text-4xl font-bold ">Scissors</h1>
                </div>
                <div className="score bg-white h-[80%] w-[20%] mr-4 rounded-2xl flex flex-col justify-center items-center ">
                    <h1 className="monscore text-3xl text-blue-600">Score</h1>
                    <p className="valeurnumerique text-gray-500 text-7xl font-bold">{score} </p>
                </div>
            </div>
            <div className="mt-20 w-full flex justify-center ">
            {etap == 0 ? <Game etapSuivante={incrmonterEtape} selection={choix} /> : <Comparaison select={monchoix} win={incremonterScore} loos={decremonterScore} nouvelleMache={rejouer} />}
            </div>
            <div className="absolute bottom-10 right-10">
                <button onClick={()=>{setRaigle(!raigle)}} className="text-white border border-white w-36">rouls</button>
            </div>
            {raigle ? <div className="absolute flex flex-col justify-center items-center top-1/4 bg-white h-[600px]  w-[600px] ">
                <img onClick={()=>{setRaigle(false)}} className="ml-[90%] mb-10 cursor-pointer " src={close} alt="" />
                <img className="h-4/5 w-h-4/5" src={modal} alt="" />
            </div> : "" }
        </div>
    )
}
export default Acceuil;