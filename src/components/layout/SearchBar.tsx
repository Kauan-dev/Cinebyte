import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
      <Field orientation="horizontal">
        <Input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-3 h-10"
        />
        <Button type="submit" variant="secondary" size="icon-lg">
          <Search className="size-5" />
        </Button>
      </Field>
    </form>
  );
}
