import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/search/${search}`);
    setIsOpen(false);
  }

  return (
    <>
      <form onSubmit={handleSearch} className="hidden md:block">
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

      <div className="md:hidden">
        {!isOpen ? (
          <Button
            variant="secondary"
            size="icon-lg"
            onClick={() => setIsOpen(true)}
          >
            <Search className="size-5" />
          </Button>
        ) : (
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
              className="h-10"
            />
            <Button type="submit" variant="secondary" size="icon-lg">
              <Search className="size-5" />
            </Button>
          </form>
        )}
      </div>
    </>
  );
}
