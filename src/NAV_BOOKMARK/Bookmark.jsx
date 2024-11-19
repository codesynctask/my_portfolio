import React from 'react'

function Bookmark({book_mark_name , book_mark_id}) {
  return (
    <div className='-mb-5 flex items-center justify-center relative'>
        <a id={book_mark_id} className=' pt-5 leading-[80%]  uppercase text-[10vw] text-wrap  font-bold '>{book_mark_name}</a>
    </div>
  )
}

export default Bookmark