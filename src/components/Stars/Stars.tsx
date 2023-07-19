import styles from "../StarMatch/starMatch.module.css";
import { range } from "../../app/utils/utils";

export default function Stars({ stars }: any) {
    return (
    <>
    {range(1, stars).map(starId => 
        <div key={starId} className={styles.star}></div>
    )}
    </>)
}