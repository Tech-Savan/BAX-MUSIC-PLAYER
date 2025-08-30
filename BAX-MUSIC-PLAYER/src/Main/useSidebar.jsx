import React, { useState } from 'react'

const useSidebar = () => {
    let [open,setOpen]=useState(false);
    return {open,setOpen};
}

export default useSidebar