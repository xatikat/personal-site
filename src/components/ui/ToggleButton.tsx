import { Dispatch, SetStateAction } from "react";

export default function ToggleButton({
  isState,
  setIsState,
}: {
  isState: boolean;
  setIsState: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className="absolute right-0 top-0 size-10 border-4"
      type="button"
      onClick={() => {
        setIsState(!isState);
      }}
    />
  );
}
