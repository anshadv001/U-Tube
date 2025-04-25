export function formatViewCount(views) {
    const num = Number(views);
  
    if (isNaN(num)) return "Invalid view count";
  
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M views";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + "K views";
    } else {
      return num + " views";
    }
  }
  