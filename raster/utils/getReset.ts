interface Props {
  hasChildBoxesFromProps?: boolean;
  hasChildBoxesFromRegister: boolean;
}

export default function getReset({
  hasChildBoxesFromProps,
  hasChildBoxesFromRegister,
}: Props): boolean {
  return typeof hasChildBoxesFromProps === "boolean"
    ? hasChildBoxesFromProps
    : hasChildBoxesFromRegister;
}
