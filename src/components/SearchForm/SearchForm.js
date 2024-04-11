import { SearchFormStyled } from "./SearchForm.styled"

export const SearchForm = ({ searchMovies, updateSearchParams, query }) => {
    return (
        <SearchFormStyled action="submit" onSubmit={searchMovies}>
            <input type="text" value={query} onChange={updateSearchParams} placeholder="Enter text" />
            <button>Search</button>
        </SearchFormStyled>
    )
}