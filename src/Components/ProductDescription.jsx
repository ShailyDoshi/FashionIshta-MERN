import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ex?
          Expedita aut commodi tempora explicabo sit magni nemo dolores animi
          cumque eos nostrum fugit enim in nisi dolorem repudiandae accusamus
          saepe atque veritatis iste accusantium aliquam, qui suscipit!
          Reprehenderit animi sint suscipit id libero maxime quasi adipisci,
          ipsum est velit iure inventore voluptate debitis corrupti.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          mollitia odio. Minus nulla nemo recusandae mollitia, in dolor a?
          Inventore doloribus reprehenderit perferendis eaque voluptatibus
          molestiae, expedita placeat?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
