const Card = () => {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-col p-6 mt-6 text-left border cursor-pointer w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 ">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Truth Title</h3>
          <p className="mt-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            at magnam aperiam aliquid culpa soluta excepturi exercitationem
            cupiditate quidem, illum dignissimos laboriosam delectus ut
            explicabo repudiandae fugiat ullam sapiente tempore quisquam
            inventore voluptates repellat quae quia libero? Accusamus dolorem
            rem maxime impedit quisquam. Cupiditate voluptate, laudantium fugit
            omnis, recusandae quibusdam cumque
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
