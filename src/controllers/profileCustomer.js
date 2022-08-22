const response = require('../helpers/standardResponse');
const errorResponse = require('../helpers/errorResponse');
const profileCustomerModel = require('../models/profileCustomer');
const { validationResult } = require('express-validator');
const { LIMIT_DATA } = process.env;

exports.getAllCustomer = (req, res) => {
  // console.log(res);
  const {
    search = '',
    sortBy = 'id',
    sorting = 'ASC',
    limit = parseInt(LIMIT_DATA),
    page = 1,
  } = req.query;
  const offset = (page - 1) * limit;

  profileCustomerModel.getAllCustomer(
    search,
    sortBy,
    sorting,
    limit,
    offset,
    (err, results) => {
      // console.log(err);
      if (results.length < 1) {
        return response(res, 'Data not found', null, 404);
      }
      const pageInfo = {};
      profileCustomerModel.countAllCustomer(search, (err, totalData) => {
        pageInfo.totalData = totalData;
        pageInfo.totalPage = Math.ceil(totalData / limit);
        pageInfo.currentPage = page;
        pageInfo.nextPage =
          pageInfo.currentPage < pageInfo.totalPage
            ? pageInfo.currentPage + 1
            : null;
        pageInfo.previousPage =
          pageInfo.currentPage > 1 ? pageInfo.currentPage - 1 : null;

        return response(res, 'List all data', results, pageInfo);
      });
    }
  );
};

exports.getCustomerById = (req, res) => {
  const { id } = req.params;

  profileCustomerModel.getCustomerById(id, (err, results) => {
    console.log(results);
    if (results.rows.length > 0) {
      return response(res, `Success get data by id : ${id}`, results.rows);
    } else {
      return response(res, `data by id : ${id} not found`, null, 404);
    }
  });
};

exports.createCustomer = (req, res) => {
  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return response(
      res,
      'Please fill data correctly',
      validation.array(),
      null,
      400
    );
  }
  profileCustomerModel.createCustomer(req.body, (results) => {
    // console.log(results);
    return response(res, 'Create profile successfully', results);
  });
};


exports.updateCustomer = (req, res) => {
  const { id } = req.params;

  let filename = null;

  if (req.file) {
    filename = req.file.filename;
  }
  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return response(
      res,
      "Please fill data correctly",
      validation.array(),
      null,
      400
    );
  }

  profileCustomerModel.updateCustomer(id, filename, req.body, (err, results) => {
    // console.log(err)
    if (err) {
      return response(res,`failed update ${err.message}`, null, 400);
    } else {
      console.log(response)
      return response(res, "Profile updated successfully", results.rows[0]);
    }
  });
};

exports.deleteCustomer = (req, res) => {
  const { id } = req.params;
  profileCustomerModel.deleteCustomer(id, (err, results) => {
    if (results.rows.length > 0) {
      return response(res, `Success deleted data by id : ${id}`, null);
    } else {
      return response(res, `data by id : ${id} not found`, null, 404);
    }
  });
};
