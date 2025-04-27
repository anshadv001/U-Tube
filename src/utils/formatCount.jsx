export function formatCount(views) {
    const num = Number(views);
  
    if (isNaN(num)) return "Invalid count";
  
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M ";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + "K ";
    } else {
      return num +"";
    }
  }