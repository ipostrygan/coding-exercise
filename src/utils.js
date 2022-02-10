const getTooltipString = (tracks) => {
  const tracksWithAmount = tracks.reduce((acc, curr) => {
    const { trackName } = curr;

    if (!acc[trackName]) {
      acc[trackName] = [];
    }

    acc[trackName].push(curr);
    return acc;
  }, {});

  return Object.entries(tracksWithAmount).map((entry) => {
    return `${entry[0]} (${entry[1].length})`
  }).join(', ');
};

export const formatDataForCharts = (data) => {
  const trackList = data.map(item => item.tracks).flat();
  const timestamps = Array.from(new Set(trackList.map(track => track.timestp)));

  return timestamps.map(timestp => {
    const tracksForCurrentTimestamp = [];
    
    trackList.forEach(track => {
      if (timestp === track.timestp) {
        tracksForCurrentTimestamp.push(track);
      }
    })
    return {
      x: timestp,
      y: tracksForCurrentTimestamp.length,
      tooltip: getTooltipString(tracksForCurrentTimestamp)
    };
  })
  .sort((previous, next) => new Date(previous.x) - new Date(next.x));
}
  