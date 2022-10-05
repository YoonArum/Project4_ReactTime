import './My.css';
import MyTime from './MyTime';

function MyTick() {
    return (
        <div className='myh2'>
            <h2 className='myh2'>현재 날짜 : {new Date().toLocaleDateString()}
                <MyTime/>
            </h2>
        </div>
    )
}
export default MyTick;