import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
    font-family: 'Montserrat', sans-serif;
 } 
 a{
    text-decoration:none;
 }
 textarea{
   box-sizing: border-box;
   height: 50px;
   border: 1px solid rgba(120, 177, 89, 0.25);
   box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
   padding: 10px 20px;
   border-radius: 12px;
   font-weight: 400;
   font-size: 14px;
 }
 input{
    box-sizing: border-box;
   height: 40px;
   border: 1px solid rgba(120, 177, 89, 0.25);
   box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
   padding: 0 20px;
   border-radius: 12px;
   font-weight: 400;
   font-size: 14px;
 }
 button{
   width: 182px;
   height: 60px;
   background: #5D9040;
   border-radius: 12px;
   border:none;
   
   font-weight: 700;
   font-size: 14px;
   line-height: 18px;
   color: #FFFFFF;
 }
`;

export default GlobalStyle;
