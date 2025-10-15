import { useQuery } from '@tanstack/react-query'
import AsideFilter from './AsideFilter'
import Product from './Product/Product'
import SortProductList from './SortProductList'
import useQueryParams from '../../hooks/useQueryParam'
import productApi from '../../apis/product.api'

export default function ProductList() {
  const queryPrams = useQueryParams()
  const { data } = useQuery({
    queryKey: ['products', queryPrams],
    queryFn: () => {
      return productApi.getProduct(queryPrams)
    }
  })
  console.log(data)
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3 pl-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
              {data &&
                data.data.data?.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
