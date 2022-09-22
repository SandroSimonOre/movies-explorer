import './WaterMark.scss';

export const WaterMark = ({text}) => {
    
    return (
        <div className='water-mark-container'>
            <div className='wrapper'>
            <div className='water-mark'>
                
                <p>{text}</p>

            </div>
            </div>

        </div>
    )
}