"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TagState {
  tagName: string;
  checked: boolean;
}

interface Props {
  tags: string[];
}

export function DropdownMenuCheckboxesIcons({ tags }: Props) {
  const initialTags: TagState[] = tags.map(tagName => ({ tagName, checked: false }));
  const [tagState, setTagState] = React.useState<TagState[]>(initialTags);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-black text-white">
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-black text-white shadow-lg z-50">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Filter Article Tags</DropdownMenuLabel>
          {tagState.map((tag) => (
            <DropdownMenuCheckboxItem
              key={tag.tagName}
              checked={tag.checked}
              onCheckedChange={(checked) =>
                setTagState(prevState =>
                  prevState.map(t =>
                    t.tagName === tag.tagName
                      ? { ...t, checked: !!checked }
                      : t
                  )
                )
              }
            >
              {tag.tagName}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}