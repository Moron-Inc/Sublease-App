export const offerPosts = [
    { id: '1', name: 'Apartment 1', bed: '1 bed', bath: '1 bath', bedBath: "1x1" },
    { id: '2', name: 'Apartment 2', bed: '2 bed', bath: '1 bath', bedBath: "2x1" },
    { id: '3', name: 'Apartment 3', bed: '2 bed', bath: '2 bath', bedBath: "2x2" },
    { id: '4', name: 'Apartment 4', bed: '3 bed', bath: '2 bath', bedBath: "3x2" },
    { id: '5', name: 'Apartment 5', bed: '3 bed', bath: '3 bath', bedBath: "3x3" },
    { id: '6', name: 'Apartment 6', bed: '4 bed', bath: '2 bath', bedBath: "4x2" },
    { id: '7', name: 'Apartment 7', bed: '4 bed', bath: '3 bath', bedBath: "4x3" },
    { id: '8', name: 'Apartment 8', bed: '4 bed', bath: '4 bath', bedBath: "4x4" },
    { id: '9', name: 'Apartment 9', bed: '5 bed', bath: '2 bath', bedBath: "5x2" },
    { id: '10', name: 'Apartment 10', bed: '5 bed', bath: '3 bath', bedBath: "5x3" },
    { id: '11', name: 'Apartment 11', bed: '5 bed', bath: '4 bath', bedBath: "5x4" },
    { id: '12', name: 'Apartment 12', bed: '5 bed', bath: '5 bath', bedBath: "5x5" },
  ];

  export const interestPosts = [
    { id: '1', name: 'Looking for 1', bed: '1 bed', bath: '1 bath', bedBath: "1x1" },
    { id: '2', name: 'Looking for 2', bed: '2 bed', bath: '1 bath', bedBath: "2x1" },
    { id: '3', name: 'Looking for 3', bed: '2 bed', bath: '2 bath', bedBath: "2x2" },
    { id: '4', name: 'Looking for 4', bed: '3 bed', bath: '2 bath', bedBath: "3x2" },
    { id: '5', name: 'Looking for 5', bed: '3 bed', bath: '3 bath', bedBath: "3x3" },
    { id: '6', name: 'Looking for 6', bed: '4 bed', bath: '2 bath', bedBath: "4x2" },
    { id: '7', name: 'Looking for 7', bed: '4 bed', bath: '3 bath', bedBath: "4x3" },
    { id: '8', name: 'Looking for 8', bed: '4 bed', bath: '4 bath', bedBath: "4x4" },
    { id: '9', name: 'Looking for 9', bed: '5 bed', bath: '2 bath', bedBath: "5x2" },
    { id: '10', name: 'Looking for 10', bed: '5 bed', bath: '3 bath', bedBath: "5x3" },
    { id: '11', name: 'Looking for 11', bed: '5 bed', bath: '4 bath', bedBath: "5x4" },
    { id: '12', name: 'Looking for 12', bed: '5 bed', bath: '5 bath', bedBath: "5x5" },
  ];

export const filterPostsByQuery = (query, radioInput) => {
    if (radioInput === 'offer'){
      if (!query) {
        return offerPosts;
      }
      return offerPosts.filter((offerPost) => {
        const offerPostName = offerPost.name.toLowerCase().split(" ").join("");
        const offerPostBed = offerPost.bed.toLowerCase().split(" ").join("");
        const offerPostBath = offerPost.bath.toLowerCase().split(" ").join("");
        const offerPostBedBath = offerPost.bedBath.toLowerCase().split(" ").join("");
        return (offerPostName.includes(query) || offerPostBed.includes(query) || offerPostBath.includes(query) || offerPostBedBath.includes(query));
      });
    }
    else if (radioInput === 'interest'){
      if (!query) {
        return interestPosts;
      }
      return interestPosts.filter((interestPost) => {
        const interestPostName = interestPost.name.toLowerCase().split(" ").join("");
        const interestPostBed = interestPost.bed.toLowerCase().split(" ").join("");
        const interestPostBath = interestPost.bath.toLowerCase().split(" ").join("");
        const interestPostBedBath = interestPost.bedBath.toLowerCase().split(" ").join("");
        return (interestPostName.includes(query) || interestPostBed.includes(query) || interestPostBath.includes(query) || interestPostBedBath.includes(query));
      });
    }
  };

export const filterPostsByID = (postID, radioInput) => {
  if (radioInput === 'offer'){
    return offerPosts.filter((offerPost) => {
      return (offerPost.id===postID);
    });
  }
  else if (radioInput === 'interest'){
    return interestPosts.filter((interestPost) => {
      return (interestPost.id===postID);
    });
  }
}