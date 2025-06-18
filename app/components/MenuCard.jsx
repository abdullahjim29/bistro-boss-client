const MenuCard = ({ menu }) => {
  const { name, recipe, image, price } = menu || {};
  return (
    <div className="flex flex-col lg:flex-row gap-x-5 gap-y-3 md:gap-y-0">
      <div>
        <img className="w-20 lg:w-28 h-20 lg:h-16 rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] rounded-tl-[0px]" src={image} alt="" />
      </div>
      <div>
        <h4 className="text-xl font-cinzel text-[#151515]">{name} --------------</h4>
        <p className="text-sm text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuCard;
