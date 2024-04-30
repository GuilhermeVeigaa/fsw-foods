import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Search() {
  return (
    <div className="flex gap-1">
      <Input placeholder="Buscar restaurantes" className="border-0" />
      <Button size="icon">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
}
