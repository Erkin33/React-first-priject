import './button.css'
export default function Button({children, type}){
    
    function handleClick(type){
        console.log('button clicked', type)
    }
    return( 
    <button className='hhfhhf' onClick={() => handleClick(type)}>{children}</button>
)
}