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
        <Button
          variant="outline"
          className="bg-neutral-800 text-neutral-200 border-white/10 hover:bg-neutral-700 hover:text-white transition"
        >
          Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="
          w-52
          bg-neutral-900/95
          text-neutral-200
          border border-white/10
          backdrop-blur-md
          shadow-2xl
          rounded-xl
          p-1
        "
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs text-neutral-500 px-2 py-1">
            Filter by tag
          </DropdownMenuLabel>

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
              className="
                px-2 py-2
                text-sm
                rounded-md
                cursor-pointer
                focus:bg-white/5
                focus:text-white
                data-[state=checked]:bg-purple-500/10
                data-[state=checked]:text-purple-300
              "
            >
              {tag.tagName}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}