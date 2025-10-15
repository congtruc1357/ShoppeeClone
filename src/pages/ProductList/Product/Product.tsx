import { Link } from 'react-router-dom'
import type { Product as ProductType } from '../../../types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from '../../../utils/utils'

interface Props {
  product: ProductType
}

export default function Product({ product }: Props) {
  return (
    <Link to='/'>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.4rem] hover:shadow-md duration-100 transition-transform'>
        <div className='w-full pt-[100%] relative'>
          <img
            src={product.image}
            alt={product.name}
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[1.75rem] line-clamp-2 text-xs'>{product.name}</div>
          <div className='flex items-center mt-3'>
            <div className='line-through max-w-[50%] text-gray-500 truncate'>
              <span>{formatCurrency(product.price_before_discount)}</span>
              <span className='text-xs'>₫</span>
            </div>
            <div className='text-orange truncate ml-1'>
              <span>{formatCurrency(product.price)}</span>
              <span className='text-xs'>₫</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <div className='flex items-center'>
              <div className='relative'>
                <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '50%' }}>
                  <svg viewBox='0 0 9.5 8' className='w-3 h-3 fill-current text-yellow-300'>
                    <defs>
                      <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                        <stop offset='0' stopColor='#ffca11'></stop>
                        <stop offset='1' stopColor='#ffad27'></stop>
                      </linearGradient>
                      <polygon
                        id='ratingStar'
                        points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                      ></polygon>
                    </defs>
                    <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth='1'>
                      <g transform='translate(-876 -1270)'>
                        <g transform='translate(155 992)'>
                          <g transform='translate(600 29)'>
                            <g transform='translate(10 239)'>
                              <g transform='translate(101 10)'>
                                <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar'></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <svg viewBox='0 0 9.5 8' className='w-3 h-3 fill-current text-yellow-300'>
                  <defs>
                    <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                      <stop offset='0' stopColor='#ffca11'></stop>
                      <stop offset='1' stopColor='#ffad27'></stop>
                    </linearGradient>
                    <polygon
                      id='ratingStar'
                      points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                    ></polygon>
                  </defs>
                  <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth='1'>
                    <g transform='translate(-876 -1270)'>
                      <g transform='translate(155 992)'>
                        <g transform='translate(600 29)'>
                          <g transform='translate(10 239)'>
                            <g transform='translate(101 10)'>
                              <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar'></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className='ml-2 text-sm'>
              <span>{formatNumberToSocialStyle(product.sold)}</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
