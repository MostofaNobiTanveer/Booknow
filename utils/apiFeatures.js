class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    const location = this.queryString.location
      ? {
          address: {
            $regex: this.queryString.location,
            $options: 'i',
          },
        }
      : {};

    this.query.find({ ...location });
    return this;
  }

  filter() {
    const queryObj = { ...this.queryString };

    const excludedFields = ['location', 'page'];
    excludedFields.forEach((el) => delete queryObj[el]);

    this.query = this.query.find(queryObj);
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryString.page) || 1;
    const skip = (currentPage - 1) * resPerPage;

    this.query = this.query.skip(skip).limit(resPerPage);
    return this;
  }
}

export default APIFeatures;
