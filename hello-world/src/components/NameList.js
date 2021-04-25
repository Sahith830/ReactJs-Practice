import React from 'react'

function NameList() {
    const names = ['Sahith', 'Pavan', 'Yash']
    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )
    // console.log('this can be re written to')

    const NameList = names.map(name => <h2>{name}</h2>)
    return <div>{NameList}</div>
}

export default NameList
