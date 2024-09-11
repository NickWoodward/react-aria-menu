import {
  MenuTrigger,
  Button,
  Popover,
  Menu,
  MenuItem,
} from "react-aria-components";

export const MobileMenu = () => {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" className={"text-slate-200 "}>
        ☰
      </Button>
      <Popover>
        <Menu className=" px-4 py-2.5">
          <MenuItem onAction={() => alert("open")}>Open</MenuItem>
          <MenuItem onAction={() => alert("rename")}>Rename…</MenuItem>
          <MenuItem onAction={() => alert("duplicate")}>Duplicate</MenuItem>
          <MenuItem onAction={() => alert("share")}>Share…</MenuItem>
          <MenuItem onAction={() => alert("delete")}>Delete…</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};
