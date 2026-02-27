import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (!search.trim()) return;
    navigate(`/search/${search}`);
    setSearch("");
  }

  return (
    <Field orientation="horizontal">
      <Input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="ml-3"
      />
      <Button onClick={handleSearch}>Search</Button>
    </Field>
  );
}
