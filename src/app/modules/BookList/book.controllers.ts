import { Request, Response } from "express";
import { BookServices } from "./book.services";

const createBook = async (req: Request, res: Response) => {
  console.log("controller:", req.body);
  try {
    const result = await BookServices.createBook(req.body);

    res.status(200).json({
      Success: true,
      message: "Book created successfully..... ",
      data: result.data,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

export const BookControllers = {
  createBook,
};
