import React from 'react'
import Spinner from './Spinner'


const Result = ({ imageUrl, spinner, defaultMessage }) => {
    return (
        <div className='resultContainer w-3/4 h-auto flex items-center justify-center'>
            {defaultMessage ? <h2 className='defaultMessage text-slate-600 text-4xl font-bold text-center'>Result will be displayed here</h2> :
             (spinner ? <Spinner/> : <img className='h-auto' src={imageUrl} />)}
        </div>
    )
}

export default Result