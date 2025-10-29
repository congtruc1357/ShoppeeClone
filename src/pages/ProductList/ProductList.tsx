import { useQuery } from '@tanstack/react-query'
import { omitBy, isUndefined } from 'lodash'
import AsideFilter from './AsideFilter'
import Product from './Product/Product'
import SortProductList from './SortProductList'
import useQueryParams from '../../hooks/useQueryParam'
import productApi from '../../apis/product.api'
import Pagination from '../../components/Pagination'
import type { ProductListConfig } from '../../types/product.type'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

export default function ProductList() {
  const queryPrams = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryPrams.page || '1',
      limit: queryPrams.limit,
      sort_by: queryPrams.sort_by,
      exclude: queryPrams.exclude,
      name: queryPrams.name,
      order: queryPrams.order,
      price_max: queryPrams.price_max,
      price_min: queryPrams.price_min,
      rating_filter: queryPrams.rating_filter
    },
    isUndefined
  )
  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProduct(queryConfig as ProductListConfig)
    }
  })
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container mx-auto max-w-7xl px-4'>
        {data && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3 pl-3'>
              <AsideFilter />
            </div>
            <div className='col-span-9'>
              <SortProductList />
              <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
                {data.data.data?.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Pagination queryConfig={queryConfig} pageSize={data.data.data?.pagination.page_size ?? 1} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
