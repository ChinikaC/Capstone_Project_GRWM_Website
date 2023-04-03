import { useState } from "react";
import Collage from "../components/Collage";


  const FinalCollage = ({ collages, submitPreferences }) => {
    const [chosenIndex, setChosenIndex] = useState(0);
    const nextIndex = ()=> {
      if(chosenIndex + 1 < collages.length - 1) {
        setChosenIndex(chosenIndex+1);
      }
    }

    console.log(collages);
    console.log(submitPreferences);

  
      return (
          <div className={`category ${submitPreferences}`}>
               {collages && collages.length > 0 && collages[chosenIndex].name ? <Collage deleteCollage={nextIndex}  collage={collages[chosenIndex]}/> : <></>}
               {/* {submitPreferences} */}
          </div>
       );
  }

  
  export default FinalCollage;