import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Button } from "../ui/button";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [isSearchBarActive, setIsSearchbarActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search/${search}`);
    inputRef.current?.blur();
  }

  function searchBarToggle() {
    setIsSearchbarActive((prev) => !prev);
  }

  return (
    <div className="flex items-center gap-2">
      <form onSubmit={handleSearch}>
        <InputGroup
          className={`h-10 bg-transparent! transition-all duration-300 ease-out ${isSearchBarActive ? "opacity-100" : "opacity-0"}`}
        >
          <InputGroupInput
            ref={inputRef}
            type="search"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </form>

      <Button variant={"outline"} size={"icon-lg"} onClick={searchBarToggle}>
        <Search className="size-6" />
      </Button>
    </div>
  );
}
