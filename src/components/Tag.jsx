import React from 'react'

import '../styles/tag.css'

function Tag({ tag }) {
  return (
    <div className="containerTag">
      {tag.map((t) => (
        <div className="tag" key={Math.random()}>
          {t}
        </div>
      ))}
    </div>
  )
}

export default Tag
