export function formatDuration(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    const pad = new Intl.NumberFormat('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  
    if (hrs > 0) {
      return `${pad.format(hrs)}:${pad.format(mins)}:${pad.format(secs)}`;
    } else {
      return `${pad.format(mins)}:${pad.format(secs)}`;
    }
  }
  