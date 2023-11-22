export const getBackground = (type) => {
  switch (type) {
    case "HTML/CSS":
      return "bg-red-500";
    case "Javascript":
      return "bg-yellow-500";
    case "React":
      return "bg-blue-500";
    case "Next.js":
      return "bg-black";
    case "Tailwind":
      return "bg-teal-500";
    case "Typescript":
      return "bg-blue-500";
    case "GraphQL":
      return "bg-purple-600";
    case "ReactQuery":
      return "bg-pink-500";
    case "API":
      return "bg-green-500";
    case "Bootstrap":
      return "bg-purple-600";
    case "Redux":
      return "bg-indigo-700";
    case "Astro":
      return "bg-blue-800";
    default:
      return "bg-blue-500";
  }
};
