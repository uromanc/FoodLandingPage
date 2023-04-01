export const Favorites = () => {
  return (
    <section className="h-[400px] f-montserrat font-thin" id="#favorites">
      <div className="flex items-center justify-center">
        <h1
          className="mt-4 bg-gradient-to-l from-secondary-blue via-darkb-bg to-secondary-blue text-7xl text-transparent bg-clip-text">
          Our Favorites
        </h1>
      </div>
      <div className="flex flex-column items-center justify-center">
        <div className="mt-6 grid grid-cols-3 grid-rows-2 gap-24">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
            alt="Food Item Favorite #1"
            className="w-96 h-60 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
            alt="Food Item Favorite #2"
            className="w-96 h-60 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Food Item Favorite #3"
            className="w-96 h-60 object-cover"
          />
        </div>
      </div>
    </section>

  )
}