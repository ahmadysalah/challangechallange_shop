import styled from "styled-components";

interface Iprops {
  active?:boolean;
}




interface Iprpos {
  color: string;
  active?:boolean;
}

export const ColorOptional = styled.div<Iprpos>((props: Iprpos) => ({
  width: "40px",
  height: "40px",
  display: "inline-block",
  cursor: "pointer",
  borderRadius: "50%",
  marginRight: "40px",
  outline: `2px solid ${props.active ? 'black' : 'transparent'} `, 
  border: "5px solid white",
  backgroundColor: props.color,
}));

export const ButtonGroup = styled.div`
display:flex;
`

export const SizeOptional = styled.div<"div"| any| Iprpos |never>((props: Iprops) => ({
  width: "135px",
  height: "40px",
  marginRight: "40px",
  display: "flex",
  justifyContent:'center',
  alignItems:'center',
  cursor: "pointer",
  borderRadius: "10px",
  fontSize:'20px',
  fontWeight:'bold',
  backgroundColor:`${props.active?'#242424':'#F5F5F5'}`,
  color:`${props.active?'white':'black'}`,
  "&:hover":{backgroundColor:`${props.active?null:'#dedede'}`}
}));