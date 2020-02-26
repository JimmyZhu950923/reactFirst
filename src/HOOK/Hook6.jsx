import React, {useMemo, useCallback, useRef} from 'react'

const UseRefComp = () => {
    const inputRef = useRef();
    const getValue = () => {
        console.log(inputRef.current.value)
    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={getValue}>getValue</button>
        </div>
    )
}

export default function Hook6() {

    let obj1 = {name: 'Jimmy', age: '24', height: '180cm'};
    let obj2 = {name: 'Mike', age: '30', height: '190cm', gender: 'male'};

    // const memoValue = useMemo(() => Object.assign(obj1, obj2), [obj1, obj2]);

    const memoCallback = useCallback(() => Object.assign(obj1, obj2), [obj1, obj2]);
    
    return (
        <div>
            {memoCallback().name}

            <UseRefComp/>
        </div>
    )
}
