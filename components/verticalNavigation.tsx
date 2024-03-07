export function VerticalIndicator({ activeIndex = 1 }) {
  const totalCircles = 6;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 transform p-8">
      <div className="flex w-12 flex-col items-center space-y-4">
        {Array.from({ length: totalCircles }).map((_, index) => (
          <div
            key={index}
            className={`h-5 w-5 rounded-full ${
              index === activeIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default VerticalIndicator;
