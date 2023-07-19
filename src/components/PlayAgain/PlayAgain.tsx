export const PlayAgain = ({onBtnClick, gameStatus}: any) => {
    return (
        <div style={{height:'90%',display:'flex',flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
        <div style={{color:gameStatus==='lost'? 'red': 'green'}}>{gameStatus === 'lost' ? 'Game Over' : 'Nice'} </div>
        <button onClick={onBtnClick}>Play Again</button>
        </div>
    )
}