export const getBackground = (type) => {
  switch (type) {
    case "React":       return "bg-blue-500";
    case "Next.js":     return "bg-gray-900";
    case "Vite.js":     return "bg-violet-500";
    case "TypeScript":
    case "Typescript":  return "bg-blue-600";
    case "Storybook":   return "bg-pink-500";
    case "Tailwind":    return "bg-teal-500";
    case "Javascript":  return "bg-yellow-500";
    case "HTML/CSS":    return "bg-orange-500";
    case "GraphQL":     return "bg-purple-600";
    case "ReactQuery":  return "bg-pink-500";
    case "Recharts":    return "bg-emerald-500";
    case "API":         return "bg-green-500";
    case "Bootstrap":   return "bg-purple-600";
    case "Redux":       return "bg-indigo-700";
    case "Astro":       return "bg-blue-800";
    case "Vercel":      return "bg-gray-700";
    default:            return "bg-slate-500";
  }
};

export const STACK_PRIORITY = [
  "React", "Next.js", "Vite.js", "TypeScript", "Typescript",
  "Tailwind", "Javascript", "HTML/CSS", "Recharts",
  "GraphQL", "ReactQuery", "Redux", "Vercel", "API", "Storybook",
];

export const sortStack = (stack) =>
  [...stack].sort((a, b) => {
    const pa = STACK_PRIORITY.indexOf(a);
    const pb = STACK_PRIORITY.indexOf(b);
    if (pa === -1 && pb === -1) return 0;
    if (pa === -1) return 1;
    if (pb === -1) return -1;
    return pa - pb;
  });
