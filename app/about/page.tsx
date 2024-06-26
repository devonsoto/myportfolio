const aboutSections = [
  {
    title: "Introduction",
    content:
      "Hey there! 👋 I'm Devon Soto, and I'm thrilled you've stumbled upon my little corner of the internet. I wear quite a few hats – I'm a Software Engineer by trade, an entrepreneur, and a retail investor by curiosity.",
  },
  // {
  //   title: "The Journey Begins",
  //   content:
  //     "My journey into the tech world was anything but ordinary. It all started with a fascination for how things work and a relentless drive to solve puzzles. This curiosity led me to dive headfirst into coding, where I quickly discovered a love for creating solutions that make people's lives easier. Before I knew it, I was not just playing with code; I was breathing it, living it, and loving every moment of it.",
  // },
  {
    title: "Entrepreneurial Spirit",
    content: (
      <>
        The leap from software engineering to entrepreneurship was a natural one
        for me. I&apos;ve always believed that technology has the power to
        transform lives, and I wanted to be at the forefront of that
        transformation.
      </>
    ),
  },
  {
    title: "A Passion for Investing",
    content:
      "Somewhere along the way, I discovered the world of retail investing. The dynamic, ever-changing nature of the stock market fascinated me, and I saw it as another puzzle to solve. Investing has taught me patience, discipline, and the importance of looking at the bigger picture – lessons that have been invaluable in every aspect of my life.",
  },
  {
    title: "Looking Ahead",
    content:
      "I'm currently looking for software engineering position at an innovative company. If you are hiring, give me a call.",
  },
];

export default function About() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex h-full max-w-2xl flex-col space-y-8 py-8 dark:text-white">
        <div className="flex flex-col space-y-8 p-4 dark:text-white">
          {aboutSections.map((section, index) => (
            <div key={index} className=" flex flex-col gap-y-2">
              <p className="text-2xl font-bold">{section.title}</p>
              <p className=" leading-relaxed">{section.content}</p>
            </div>
          ))}
          <p>
            Thanks for dropping by! Feel free to connect with me if you&apos;re
            interested in chatting about technology, investments, or if you have
            an exciting project in mind. Let&apos;s make something amazing
            together.
          </p>
        </div>
      </div>
    </div>
  );
}
