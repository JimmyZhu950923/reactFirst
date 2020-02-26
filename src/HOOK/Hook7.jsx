import React, {useEffect} from 'react'

const useChangeTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title])
}

export default function Hook7() {
    useChangeTitle('jimmy')
    return (
        <div>
            Test 
        </div>
    )
}
