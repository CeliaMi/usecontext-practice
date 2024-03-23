import React from 'react'

const BookCard = ({ books }) => {
  return (
    <>
            {books.map(book => {
              return(  
                <article className='bg-gray-800 bg-opacity-40 p-8 rounded m-6 p-2 lg:w-1/2 md:w-2/3 mx-auto' key={book.id}>
                  <h5 className='text-xs text-purple-400 tracking-widest font-medium title-font mb-1'>LIBRO A LEER</h5>
                  <h4 className='text-white font-medium title-font tracking-wider'>{book.title}</h4>
                  <h6 className='title-font font-medium text-whitleading-relaxed mb-6 '>de {book.writer}</h6>
                </article>
            )})}
    </>
  )
}

export default BookCard