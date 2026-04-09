"use client"

import * as React from "react"
import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react"

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
  tag: string;
  checked: boolean;
}

export function DropdownMenuCheckboxesIcons(props : any) {
  const [tags, setTags] = React.useState<TagState[]>([]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-black text-white">
Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-black text-white shadow-lg z-50">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Filter Article Tags</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={tags.checked}
            onCheckedChange={(checked) =>
              setTags({ ...tags, checked: checked === true })
            }
          >
            <MailIcon />
            Email notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={tags.sms}
            onCheckedChange={(checked) =>
              setTags({ ...tags, checked: checked === true })
            }
          >
            <MessageSquareIcon />
            SMS notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={tags.push}
            onCheckedChange={(checked) =>
              setTags({ ...tags, push: checked === true })
            }
          >
            <BellIcon />
            Push notifications
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}