import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function PFM_Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      variant="contained"
    />
  );
}
