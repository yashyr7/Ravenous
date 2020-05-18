const apiKey = 'qJZBU5Zlb0kyVYfVVViW1FONeWYrzquTY4HYqspjTiswbk1Ym8wjzf1Qbp0i8Sa3G-Pto5KKUlXA0SRZEGk7QJz5WCx0-xR3HBm2GRp59H4wGefcy95bU0gHeumwXnYx'; 

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};
