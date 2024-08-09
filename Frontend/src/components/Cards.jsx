/* eslint-disable react/prop-types */


const Cards = ({ item }) => {
  return (
    <>
    <div className="mt-4 my-3 p-3 dark:text-black">
    <div className="h-[450px] card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" 
      className="object-cover object-center"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.book}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
    <div
  className="badge badge-ghost"
  style={{ textDecoration: item.category === 'free' ? 'line-through' : 'none' }}
>
  {item.price}
</div>
      
      <div className="cursor-pointer px-2 py-1 rounded-full  border-black border-[1px] hover:bg-pink-500 hover:text-white duration-200 hover:border-none text-sm">Buy Now</div>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default Cards