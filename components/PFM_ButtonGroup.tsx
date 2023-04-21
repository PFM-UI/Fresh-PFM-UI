import { JSX } from "preact";

export function PFM_ButtonGroup(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonGroup
      {...props}
      variant="contained"
      aria-label="outlined primary button group"
    />
  );
}
