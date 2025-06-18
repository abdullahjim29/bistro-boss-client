const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-6/8 md:w-3/8 lg:w-2/8 mx-auto my-10">
            <p className="text-[#D99904]">{subHeading}</p>
            <h2 className="border-y-2 border-gray-400 py-4 mt-3 text-x md:text-2xl">{heading}</h2>
        </div>
    );
};

export default SectionTitle;