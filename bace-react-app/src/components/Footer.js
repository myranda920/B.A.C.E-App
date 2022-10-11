import "./Footer.css";

const Footer = () => {
   const year = new Date().getFullYear();

   return <footer>{`Copyright ${year}`}</footer>
};

export default Footer;