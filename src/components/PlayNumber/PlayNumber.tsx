import styles from "../StarMatch/starMatch.module.css";

interface propTypes {
    playNum: number,
    status: string,
    onClick: Function
}

const colors: any = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

export default function PlayNumber({ playNum, status, onClick }: propTypes) {
    return (<button className={styles.number} style={{backgroundColor: colors[status]}} onClick={() => onClick(playNum, status)}>{playNum}</button>)
}