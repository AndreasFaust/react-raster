export default (hasChildBoxesFromProps, hasChildBoxesFromRegister) => {
  if (typeof hasChildBoxesFromProps === 'boolean') return hasChildBoxesFromProps
  return hasChildBoxesFromRegister
}
