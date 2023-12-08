import { check } from "express-validator";

export const OrderCreateValidator = [
  check("orderItems")
    .isArray()
    .withMessage("orderItems must be an array of type OrderItem[]")
    .bail()
    .notEmpty()
    .withMessage("orderItems must not be empty"),
  check("orderItems.*.productId")
    .trim()
    .isNumeric()
    .bail()
    .withMessage("Incorrect productId"),
  check("orderItems.*.quantity")
    .trim()
    .isNumeric()
    .bail()
    .withMessage("Incorrect quantity"),
];

export const OrderUpdateValidator = OrderCreateValidator;
