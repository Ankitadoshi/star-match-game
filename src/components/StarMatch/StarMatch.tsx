"use client";
import styles from "./starMatch.module.css";
import { range, random, sum, randomSumIn} from "../../app/utils/utils";
import { useEffect, useState } from "react";
import PlayNumber from "../PlayNumber/PlayNumber";
import Stars from "../Stars/Stars";
import { PlayAgain } from "../PlayAgain/PlayAgain";

export default function StarMatch() {
  
  const [stars, setStars] = useState(random(1,9));
  const [availableNums, setAvailableNums] = useState(range(1,9));
  const [candidateNums, setCandidateNums] = useState<Array<number>>([]);
  const [time, setTime]= useState(10)

  const candidateNumsAreWrong = () => {
    return sum(candidateNums) > stars;
  }

  const gameStatus = availableNums.length === 0 ? 'won' : time > 0 ? 'active' : 'lost';
  

  const numberStatus = (num: any) => {
    if(!availableNums.includes(num)) {
      return 'used';
    }
    if(candidateNums.includes(num)) {
      return candidateNumsAreWrong() ? 'wrong' : 'candidate';
    }
    return 'available';
  }

  const resetGame = () => {
    setAvailableNums(range(1,9));
    setStars(random(1,9));
    setCandidateNums([]);
  }

  useEffect(() => {
    if(time > 0 && availableNums.length > 0) {
      const timer = setTimeout(()=> {
        setTime(time-1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  const onNumberClick = (num: number, status: string) => {
    if(status !== 'used') {
      const newCandidateNums = status === 'available' ? candidateNums.concat(num) : candidateNums.filter(n => n!==num);
      if(sum(newCandidateNums) === stars) {
        const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n));
        setStars(randomSumIn(newAvailableNums, 9));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      } else {
        setCandidateNums(newCandidateNums);
      }
    }
    return;
  }

  return (
    <div className={styles.game}>
      <div className={styles.help}>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
         {gameStatus === 'active' ? <Stars stars={stars} /> : <PlayAgain onBtnClick={resetGame} gameStatus={gameStatus} />}
        </div>
        <div className={styles.right}>
          {range(1,9).map((buttonId) => { return <PlayNumber key={buttonId} playNum={buttonId} status={numberStatus(buttonId)} onClick={onNumberClick}/>}
          )}
        </div>
      </div>
      <div className={styles.timer}>Time Remaining: {time}</div>
    </div>
  );
}

