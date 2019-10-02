exports.getTotalDuration = trip => trip.tracks.reduce((accum, track) => track.durationTime + accum, 0);
