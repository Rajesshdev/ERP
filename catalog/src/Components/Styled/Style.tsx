import React from 'react';
import styled from 'styled-components';
export const Tooltips={
  fontSize:"15px",
  marginTop:"6px"
}
interface LegendProps {
  required?: boolean;
  children?:string
}
 const StyledLegend = styled.legend<LegendProps>`
  ${(props) => props.required && `color: red; &::after { content: "* "; }`}
`;

export const Legend: React.FC<LegendProps> = ({ required, children }) => {
  return <StyledLegend required={required}>{children}</StyledLegend>;
};





 
