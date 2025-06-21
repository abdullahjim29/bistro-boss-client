const FoodCard = ({ menu }) => {
  const { name, recipe, image, price } = menu || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={image}
          alt={name}
        />
        <p className="bg-black text-white py-1 px-4 absolute right-4 top-4">{price}</p>
      </figure>
      <div className="card-body bg-[#F3F3F3] space-y-2">
        <h2 className="card-title">{name}</h2>
        <p>
          {recipe}
        </p>
        <div className="card-actions justify-center">
          <button className="bg-gray-200 text-[#BB8506] px-4 py-2 border-b-3    border-[#BB8506] rounded-lg uppercase hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-none">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
