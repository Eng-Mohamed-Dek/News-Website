import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

const Navbar = () => {
  const  { setSearch, search } = useContext(SearchContext)

  return (
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img src="./gellebashir.png" alt="" />
        </a>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          onChange={(event) => {
            event.preventDefault()
            setSearch(event.target.value)
            localStorage.setItem('search' , search)
          }}
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </nav>

  )
}

export default Navbar