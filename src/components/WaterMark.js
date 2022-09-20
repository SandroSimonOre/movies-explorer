import './WaterMark.scss';
export const WaterMark = ({content}) => {
    
    return (
        <div className='water-mark-container'>
            <div className='wrapper'>
            <div className='water-mark'>
                
                <p>{content}</p>

            </div>
            </div>

        </div>
    )
}