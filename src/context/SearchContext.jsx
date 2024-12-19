import React, { createContext, useState } from 'react'

export const SearchContext = createContext(null)

const SearchContextProvider = ({children}) => {
 const [search, setSearch] = useState('trump')

  return (
    <SearchContext.Provider value={{search, setSearch}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider