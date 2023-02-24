import image1 from "./images/icon-rock.svg";
import image2 from "./images/icon-paper.svg";
import image3 from "./images/icon-scissors.svg";
import "./index.css"
function Game(props) {
  return (
    <div class="triangle ">
    <img onClick={()=>{props.etapSuivante(); props.selection(1);}} className="absolute cursor-pointer border-[20px] border-blue-400 bg-white rounded-full h-40 w-40 p-8 left-[-45px]  top-[-45px] " src={image1} alt="" />
    <img onClick={()=>{props.etapSuivante(); props.selection(2);}} className="absolute cursor-pointer border-[20px] border-yellow-400 bg-white rounded-full h-40 w-40 p-8  top-[-45px] right-[-45px] " src={image2} alt="" />
    <img onClick={()=>{props.etapSuivante(); props.selection(3);}} className="absolute cursor-pointer border-[20px] border-red-400 bg-white rounded-full h-40 w-40 p-8  bottom-[-60px] right-[35%] " src={image3} alt="" />
    </div>
  );
}
export default Game;
