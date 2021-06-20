import styled from "styled-components";

const StyledRow = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Rows: React.FC<any> = ({ breakpoint, rows, children }) => {
  return rows[breakpoint.index] ? (
    <StyledRow children={children} />
  ) : (
    <>{children}</>
  );
};

export default Rows;
