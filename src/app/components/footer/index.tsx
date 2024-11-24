import React from 'react'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Footer(props: any) {
   console.log(props);
   

    return (
        <div className='dark:bg-black dark:text-white bg-white text-black text-center p-2 text-sm'>
            © 2024 zamhadi. All rights reserved.
        </div>
    )
}

export default Footer
