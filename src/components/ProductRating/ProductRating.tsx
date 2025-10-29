export default function ProductRating({ rating }: { rating: number }) {
  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return rating - Math.floor(rating) * 100 + '%'
    }
    return '0%'
  }

  return (
    <div className='flex items-center'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative' key={index}>
            <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: handleWidth(index + 1) }}>
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
        ))}
    </div>
  )
}
