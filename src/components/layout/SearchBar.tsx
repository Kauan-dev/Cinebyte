import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search/${search}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <InputGroup className="h-10 bg-transparent!">
        <InputGroupInput
          type="search"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
