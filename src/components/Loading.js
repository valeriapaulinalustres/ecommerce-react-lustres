import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loading.css';

function Loading (){
    return (
        <div className='spinnerContainer' >
            <Spinner className= "spinner"  />
            <Spinner className= "spinnerDos"  />
        </div>
    );
}
export default Loading;