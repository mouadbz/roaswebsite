import { FaStar } from 'react-icons/fa'

const Rating = () => {
  const PaymentRatingData = [
    {
      id: 1,
      rating: 4.7,
      name: 'Capterra',
      desc: 'Top Customer Fulfilment',
    },
    {
      id: 2,
      rating: 4.6,
      name: 'Capterra',
      desc: 'Best Payment Software',
    },
    {
      id: 3,
      rating: 4.9,
      name: 'Trustpilot',
      desc: 'Top Payment Company',
    },
  ]
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-5 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
          <div className="pl-12 max-lg:col-span-full max-lg:py-12 max-lg:pl-0 max-lg:text-center lg:col-span-5 lg:max-w-[425px]">
            <h2 className=" mb-8">
              Thousands of <br />
              users have faith in us
            </h2>
            <p>Boost your insights that help you to grow business</p>
          </div>
          <div className="max-lg:col-span-full lg:col-span-7">
            <div className=" grid grid-cols-3 gap-3 max-lg:grid-cols-1">
              {PaymentRatingData.map((item) => (
                <div
                  className=" rounded border border-dashed border-gray-100 px-7 py-12 text-center dark:border-borderColor-dark"
                  key={item.id}>
                  <h3 className="mb-5 text-[48px]">{item.rating}</h3>
                  <div className="mb-4">
                    {Array(Math.round(item.rating))
                      .fill(<FaStar className="text-[#FFC107]" />)
                      .map((star, i) => (
                        <span key={i}>
                          {star}
                          {/* */}
                        </span>
                      ))}
                  </div>
                  <h4 className="mb-3.5 text-xl font-semibold">{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rating
