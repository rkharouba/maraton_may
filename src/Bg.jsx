
import './Bg.css';
import close_red from './assets/close.png'

function Bg() {
  return (
    <div>
      <div className='bg_cont'>
        <img src={close_red} className='close_red'/>
      </div>

    </div>
  );
}

export default Bg;
