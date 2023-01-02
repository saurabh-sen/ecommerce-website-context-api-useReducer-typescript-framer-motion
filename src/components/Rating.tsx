const Rating = ({ rate, click } : any) => {
  return (
    <p className="flex items-center ">
      <span>Ratings</span>
      {[...Array(5)].map((_, i: number) => {
        return (
          <span
          className="cursor-pointer m-2"
            key={i + "s"}
            onClick={() => click(i+1)}
          >
            {rate > i ? "🌟" : "☆"}
          </span>
        );
      })}
    </p>
  );
};

export default Rating;
