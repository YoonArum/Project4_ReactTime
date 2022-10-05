import './My.css';

function MyTime() {
    return (
        <div className='mytime'>
            <p>
                현재 시간
            </p>
            <p>
                {new Date().toLocaleTimeString()}
            </p>
        </div>
    )
}
export default MyTime;