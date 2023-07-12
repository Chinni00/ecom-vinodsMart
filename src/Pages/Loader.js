import React from 'react'

const Loader = () => {
  return (
    <div style={{position:'relative', marginLeft:'50%',zIndex:1}} class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  )
}

export default Loader