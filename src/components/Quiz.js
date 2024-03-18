import React from 'react'
import Questions from './Questions'
/**should be ./Que... */

export default function Quiz(){

    /** next button event handler */
    function onNext(){
        console.log('On next click')
    }
    /** Prev button event handler */
    function onPrev(){
        console.log('On onPrive click')
    }
    

    return(
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            {/* display questions */}
            <Questions></Questions>

            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Prev</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}