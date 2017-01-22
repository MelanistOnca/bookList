

export function bufferDeletedBook(deletedBook) {
  return {
    type: 'BUFFER_FOR_DELETED_BOOK',
    deletedBook
  }
}

export function clearDeletedBook(){
  return {
    type: 'CLEAR_BOOK_BUFFER'
  }
}
