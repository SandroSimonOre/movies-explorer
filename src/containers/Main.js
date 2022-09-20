import './Main.scss';
export const Main = (props) => {

    return (
        <div id = 'main' className='main'>
            
            {props.children}

        </div>
    )
}