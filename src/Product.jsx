import { Outlet, Link } from "react-router-dom";

function Product() {
  return (
    <div className="product">
      s hello
      <Link to="phone">Ver celulares</Link>
      <div className="phone-outlet">
        <Outlet></Outlet>
      </div>
      <div>ENCABEZADO</div>
      <div>footers</div>
    </div>
  );
}

export default Product;
