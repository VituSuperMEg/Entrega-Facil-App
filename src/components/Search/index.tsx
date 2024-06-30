import { SearchStyles, SearchTextInput } from "./styles"
import SearchIcon from '@assets/icon/Minimalistic Magnifer.svg';
export const Search = () => {
    return (
        <SearchStyles>
            <SearchTextInput 
             placeholder="JBGHDRTH01254"
            />
            <SearchIcon />
        </SearchStyles>
    )
}