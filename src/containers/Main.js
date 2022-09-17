import './Main.scss';
const Main = (props) => {

    return (
        <div id = 'main' className='main'>
            
            {props.children}

        </div>
    )
}

export default Main;