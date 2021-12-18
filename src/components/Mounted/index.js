import React, {useState} from 'react'

import Content from './Content'

export default function Mounteds() {
    const [show, setShow] = useState(false)

    return (
        <div className='ant-table-container'>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}
        </div>
    )
}
