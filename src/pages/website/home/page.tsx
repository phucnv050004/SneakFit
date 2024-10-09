import Banner from "./_components/Banner"
import Category from "./_components/category"
import ProductList from "./_components/ProductList"
import PromotionalProducts from "./_components/PromotionalProducts"
import Service from "./_components/Service"


const pageHome = () => {
  return (
    <div>
        <Banner/>
        <PromotionalProducts/>
        <ProductList/>
        <Service/>
        <Category/>
    </div>
  )
}

export default pageHome