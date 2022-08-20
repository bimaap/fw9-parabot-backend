const prisma = require("../helpers/prisma");

exports.getAllCheckouts = async () => {
  const checkouts = await prisma.checkouts.findMany();
  return checkouts;
};

exports.create = async (data) => {
  const checkouts = await prisma.checkouts.create({
    data
  });
  return checkouts;
};